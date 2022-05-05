import _ from 'lodash';
import { isDevelopment, triggers, options } from './environment';
import { logSentryEvent } from './logger';
import { convertToSentryEvent } from './eventConverter';
import { logLevelsToPriorities } from './sentryLogLevels';
import { JournalEvent } from './journalEvent';
import { Journalctl } from './journalctl';

const utf8decoder = new TextDecoder();

const filters = _.uniq(Object.keys(triggers));
const filtersRegExs = filters.map((pattern) => ({
	regEx: new RegExp(pattern),
	pattern,
}));

new Journalctl({
	all: true,
}).on('event', (event: JournalEvent) => {
	if (
		event.CONTAINER_NAME != null &&
		event.CONTAINER_NAME.indexOf('logwatcher') === 0
	) {
		// ignore our own messages
		return;
	}
	if (_.isArray(event.MESSAGE)) {
		const u8arr = new Uint8Array(event.MESSAGE);
		event.MESSAGE = utf8decoder.decode(u8arr);
	}

	if (isDevelopment) {
		console.log(`received event: ${JSON.stringify(event)}`);
	}
	for (const filtersRegEx of filtersRegExs) {
		if (filtersRegEx.regEx.test(event.MESSAGE)) {
			const sentryEvent = convertToSentryEvent(event);
			const fingerprint = triggers[filtersRegEx.pattern];
			sentryEvent.fingerprint = _.concat(
				[fingerprint],
				sentryEvent.fingerprint || [],
			);
			if (sentryEvent.level != null) {
				const sentryLevelPriority = logLevelsToPriorities[sentryEvent.level];
				if (isDevelopment) {
					console.log(`sentryEvent: ${JSON.stringify(sentryEvent)}`);
				}
				if (options.defaultLogLevelPriority != null) {
					if (sentryLevelPriority > options.defaultLogLevelPriority) {
						return;
					}
				}
			} else {
				// analyze event priority
				if (options.defaultLogLevelPriority != null) {
					const eventPriority = parseInt(event.PRIORITY, 10);
					if (eventPriority > options.defaultLogLevelPriority) {
						return;
					}
				}
			}

			logSentryEvent(sentryEvent);
		}
	}
});
