import { Event as SentryEvent } from '@sentry/node/types/';
import * as Sentry from '@sentry/node';
import _ from 'lodash';
import { JournalEvent } from './journalEvent';
import { sentryTextLogLevels, logLevels } from './sentryLogLevels';

const logFmtRegex =
	/^time="(?<time>.*)" level=(?<level>\S*) msg="(?<msg>.*)" ((?<other>.*)|module=(?<module>\S*) namespace=(?<namespace>\S*) topic=(?<topic>\S*) type="(?<type>.*)")$/;

export function convertToSentryEvent(event: JournalEvent): SentryEvent {
	const sentryEvent: SentryEvent = {};

	// First save the whole event on "extra": An arbitrary mapping of additional metadata to store with the event.
	sentryEvent.extra = { ...event };

	// Parse msg lines which are in "docker log format" as in:
	// "MESSAGE":"time=\"2022-05-03T23:55:13.193593570Z\" level=info msg=\"shim reaped\" id=4115ce48cf7e033f0a0287f37304e8c5a028a6ccd3f79e14f985c22edbebde4c",

	// TODO these lines are in "logfmt" format ( https://brandur.org/logfmt )
	// we could use https://github.com/csquared/node-logfmt to parse them
	if (_.isString(event.MESSAGE)) {
		const matchResult = event.MESSAGE.match(logFmtRegex);
		if (matchResult == null) {
			sentryEvent.message = event.MESSAGE;
			sentryEvent.level =
				logLevels[parseInt(event.PRIORITY, 10)] || Sentry.Severity.Info;
		} else {
			sentryEvent.message = matchResult.groups?.msg;
			// Acceptable values are: fatal, error, warning, info, debug
			if (matchResult.groups?.level != null) {
				sentryEvent.level = sentryTextLogLevels[matchResult.groups?.level];
			} else {
				sentryEvent.level =
					logLevels[parseInt(event.PRIORITY, 10)] || Sentry.Severity.Info;
			}

			// Now pass other properties extracted from MESSAGE
			sentryEvent.extra.time = matchResult.groups?.time;

			if (matchResult.groups?.other !== null) {
				sentryEvent.extra.other = matchResult.groups?.other;
			} else {
				sentryEvent.extra.module = matchResult.groups?.module;
				sentryEvent.extra.namespace = matchResult.groups?.namespace;
				sentryEvent.extra.topic = matchResult.groups?.topic;
				sentryEvent.extra.type = matchResult.groups?.type;
			}
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
	sentryEvent.logger = event.SYSLOG_IDENTIFIER;

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
