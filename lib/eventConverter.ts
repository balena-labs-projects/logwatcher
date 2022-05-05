import { Event as SentryEvent } from '@sentry/node/types';
import * as Sentry from '@sentry/node';
import _ from 'lodash';
import { JournalEvent } from './journalEvent';
import { sentryTextLogLevels, logLevels } from './sentryLogLevels';
import { isDevelopment } from './environment';

interface LogFormatRegex {
	name: string;
	regExp: RegExp;
}

// Parse msg lines which are in "docker log format" as in:
// "MESSAGE":"time=\"2022-05-03T23:55:13.193593570Z\" level=info msg=\"shim reaped\" id=4115ce48cf7e033f0a0287f37304e8c5a028a6ccd3f79e14f985c22edbebde4c",

// TODO these lines are in "logfmt" format ( https://brandur.org/logfmt )
// we could use https://github.com/csquared/node-logfmt to parse them
const logFmtRegex = {
	name: 'logFmtRegex',
	regExp:
		/^time="(?<time>.*)" level=(?<level>\S*) msg="(?<msg>.*)" ((?<other>.*)|module=(?<module>\S*) namespace=(?<namespace>\S*) topic=(?<topic>\S*) type="(?<type>.*)")$/,
};

const commonLogFormatRegexs = [
	logFmtRegex,
	// '2022-05-04T13:59:06.147Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-27v2v-49.3.16]: Unhandled Server Error {"message":"Schema query timeout: {"type":"object","additionalProperties":true}"}\r'
	{
		name: 'jellyfishLogRegex',
		regExp:
			/^(?<time>.*)\s[(?<module>.*)]\s(?<level>.*)\s[(?<topic>.*)]:\s(?<msg>.*)$/,
	},
	// fetches the level from an expression like [crit]
	{
		name: 'greedyCaretLogRegex',
		regExp:
			/^(?<time>.*)\[(?<level>EMERG|PANIC|ALERT|CRIT|ERR|ERROR|WARNING|WARN|NOTICE|INFO|DEBUG|emerg|panic|alert|crit|err|error|warning|warn|notice|info|debug)\](?<msg>.*)$/,
	},
	// fetches the level from an expression like [app:error]
	{
		name: 'greedyCaretColonLogRegex',
		regExp:
			/^(?<time>.*)\[(.*\:)(?<level>EMERG|PANIC|ALERT|CRIT|ERR|ERROR|WARNING|WARN|NOTICE|INFO|DEBUG|emerg|panic|alert|crit|err|error|warning|warn|notice|info|debug)\](?<msg>.*)$/,
	},
	// expects to find the level after a prefix that is assumed to be a timestamp
	{
		name: 'greedyLogRegex',
		regExp:
			/^(?<time>.*)(?<level>EMERG|PANIC|ALERT|CRIT|ERR|ERROR|WARNING|WARN|NOTICE|INFO|DEBUG|emerg|panic|alert|crit|err|error|warning|warn|notice|info|debug)(?<msg>.*)$/,
	},
];
// TODO: add other msg formats
// rfc5424
// rfc3164
// apache common
// apache error

/**
 * Creates a Sentry event from a journald event, doing a parse on the roperties and the message to extract the level and other properties
 *
 * @param event event from journald
 * @returns a Sentry Event
 */
export function convertToSentryEvent(event: JournalEvent): SentryEvent {
	const sentryEvent: SentryEvent = {};

	// First save the whole event on "extra" ( "an arbitrary mapping of additional metadata to store with the event" )
	sentryEvent.extra = { ...event };

	if (_.isString(event.MESSAGE)) {
		// Clean up message. Messages from journald may come with a '\r' at the end
		event.MESSAGE = event.MESSAGE.replace('\r', '');

		// Messages from balena containers come with the same priority, we need to extract the priority from the message content
		if (isContainerEvent(event)) {
			// See if the message matches one of the known formats
			processWithLogFormats(event, sentryEvent, commonLogFormatRegexs);
		} else if (isBalenaEvent(event)) {
			// apply logfmt
			processWithLogFormats(event, sentryEvent, [logFmtRegex]);
		} else {
			setLevelAndMessageFromJournalEvent(sentryEvent, event);
		}
	}

	// Indicates when the event was created in the Sentry SDK. The format is either a string as defined in RFC 3339 or a numeric
	// (integer or float) value representing the number of seconds that have elapsed since the Unix epoch.
	// convert from microseconds to seconds
	if (event.__REALTIME_TIMESTAMP != null) {
		sentryEvent.timestamp =
			Number(event.__REALTIME_TIMESTAMP).valueOf() / 1000000;
	}

	// A string representing the platform the SDK is submitting from. This will be used by the Sentry interface to customize various components in the interface.
	// Not overriding, will use "node"
	// The logger is shown on the issues list and is used to filter

	const CONTAINER_NAME_ID_REGEX =
		/_([A-Za-z0-9])+_([A-Za-z0-9])+_([A-Za-z0-9])+$/;
	if (
		event.CONTAINER_NAME != null &&
		event.CONTAINER_NAME.match(CONTAINER_NAME_ID_REGEX)
	) {
		const containerNameNoIds = event.CONTAINER_NAME.replace(
			CONTAINER_NAME_ID_REGEX,
			'',
		);
		sentryEvent.logger = containerNameNoIds;
	} else {
		sentryEvent.logger = event.SYSLOG_IDENTIFIER;
	}
	//

	// Identifies the host from which the event was recorded.
	// Using the _HOSTNAME which appears as the UUID on the dashboard
	sentryEvent.server_name = event._HOSTNAME;

	// A list of strings used to dictate the deduplication of this event.
	sentryEvent.fingerprint = _.compact([
		event.SYSLOG_IDENTIFIER,
		event._EXE,
		sentryEvent.message,
	]);

	// Optional. A map or list of tags for this event. Each tag must be less than 200 characters.
	sentryEvent.tags = {
		syslogIdentifier: event.SYSLOG_IDENTIFIER,
		codeFile: event.CODE_FILE,
		errNo: event.ERRNO,
		command: event._COMM,
		executable: event._EXE,
		cmdLine: event._CMDLINE,
	};

	// WIP Decide if we need to define the following properties:

	// 	breadcrumbs?: Breadcrumb[];

	// The release version of the application.
	// Release versions must be unique across all projects in your organization.
	// release

	// The distribution of the application.
	// 	dist

	// The environment name, such as production or staging.
	// environment

	// The name of the transaction which caused this exception.
	// transaction

	// A list of relevant modules and their versions.
	// 	modules?: {
	// 			[key: string]: string;
	// 	};

	// https://develop.sentry.dev/sdk/event-payloads/sdk/
	// 	// sdk?: SdkInfo;

	// https://develop.sentry.dev/sdk/event-payloads/request/
	// The Request interface contains information on a HTTP request related to the event.
	// 	request?: Request;

	// 	exception?: {
	// 			// values?: Exception[];
	// 	};
	// 	// stacktrace?: Stacktrace;
	// 	// contexts?: Contexts;

	// https://develop.sentry.dev/sdk/event-payloads/user/
	// An interface describing the authenticated User for a request.
	// 	user?: User;

	// 	// type?: EventType;

	// 	// spans?: Span[];
	// 	// measurements?: Measurements;
	// 	// debug_meta?: DebugMeta;
	// 	sdkProcessingMetadata?: {
	// 			[key: string]: any;
	// 	};

	return sentryEvent;
}

function processWithLogFormats(
	event: JournalEvent,
	sentryEvent: SentryEvent,
	logFormatRegexs: LogFormatRegex[],
) {
	let matchResult;
	let logFormatRegex;
	for (let i = 0; matchResult == null && i < logFormatRegexs.length; i++) {
		logFormatRegex = logFormatRegexs[i];
		matchResult = event.MESSAGE.match(logFormatRegex.regExp);
	}

	if (matchResult != null) {
		if (isDevelopment) {
			console.log(
				`regex ${logFormatRegex.name} matched: ${JSON.stringify(matchResult)}`,
			);
		}
		sentryEvent.message = matchResult.groups?.msg;
		// Acceptable values are: fatal, error, warning, info, debug, etc
		if (matchResult.groups?.level != null) {
			sentryEvent.level =
				sentryTextLogLevels[matchResult.groups?.level.toLowerCase()];
		} else {
			sentryEvent.level =
				logLevels[parseInt(event.PRIORITY, 10)] || Sentry.Severity.Info;
		}

		// Now pass other properties extracted from MESSAGE
		if (sentryEvent.extra == null) {
			sentryEvent.extra = {};
		}
		sentryEvent.extra.time = matchResult.groups?.time;

		if (matchResult.groups?.other !== null) {
			sentryEvent.extra.other = matchResult.groups?.other;
		} else {
			sentryEvent.extra.module = matchResult.groups?.module;
			sentryEvent.extra.namespace = matchResult.groups?.namespace;
			sentryEvent.extra.topic = matchResult.groups?.topic;
			sentryEvent.extra.type = matchResult.groups?.type;
		}
	} else {
		setLevelAndMessageFromJournalEvent(sentryEvent, event);
	}
}

function setLevelAndMessageFromJournalEvent(
	sentryEvent: SentryEvent,
	event: JournalEvent,
) {
	sentryEvent.message = event.MESSAGE;
	sentryEvent.level =
		logLevels[parseInt(event.PRIORITY, 10)] || Sentry.Severity.Info;
}

function isContainerEvent(event: JournalEvent) {
	return (
		event.CONTAINER_ID_FULL != null &&
		event._COMM === 'balenad' &&
		event.CONTAINER_NAME != null &&
		event.CONTAINER_NAME !== 'balena_supervisor' // TODO Do we want to log this messages on its own logger?
	);
}

function isBalenaEvent(event: JournalEvent) {
	return (
		(event._COMM === 'balenad' || event._COMM === 'balena-engine-c') &&
		event.SYSLOG_IDENTIFIER === 'balenad' &&
		event._SYSTEMD_UNIT === 'balena.service' &&
		event.CONTAINER_ID_FULL == null
	);
}
