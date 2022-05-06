import _ from 'lodash';
import { isDebug, triggers, options } from './environment';
import { logEvent, logSentryEvent, sendToSentry } from './logger';
import { convertToSentryEvent } from './eventConverter';
import { logLevelsToPriorities } from './sentryLogLevels';
import type { JournalEvent } from './journalEvent';
import { Journalctl } from './journalctl';

const filters = _.uniq(Object.keys(triggers));
const filtersRegExs = filters.map((pattern) => ({
	regEx: new RegExp(pattern),
	pattern,
}));

new Journalctl({
	all: true,
}).on('event', (event: JournalEvent) => {
	// Ignore our own messages
	if (
		event.CONTAINER_NAME != null &&
		event.CONTAINER_NAME.indexOf('logwatcher') === 0
	) {
		return;
	}

	// Log all received events if in debug mode
	if (isDebug) {
		logEvent(event);
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

			if (isDebug) {
				logSentryEvent(sentryEvent);
			}
			sendToSentry(sentryEvent);
		}
	}
});
