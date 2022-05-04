import _ from 'lodash';
import { isDevelopment, triggers, options } from './environment';
import { logSentryEvent } from './logger';
import { convertToSentryEvent } from './eventConverter';

// tslint:disable-next-line: no-var-requires
const Journalctl = require('@seydx/journalctl');

const filters = _.uniq(Object.keys(triggers));
const filtersRegExs = filters.map((pattern) => ({
	regEx: new RegExp(pattern),
	pattern,
}));

new Journalctl({
	// filters,
}).on('event', (event: any) => {
	if (isDevelopment) {
		console.log(`received event: ${JSON.stringify(event)}`);
	}
	if (options.defaultLogLevelPriority != null) {
		const eventPriority = parseInt(event.PRIORITY, 10);
		if (eventPriority > options.defaultLogLevelPriority) {
			return;
		}
	}

	for (const filtersRegEx of filtersRegExs) {
		if (filtersRegEx.regEx.test(event.MESSAGE)) {
			const sentryEvent = convertToSentryEvent(event);
			const fingerprint = triggers[filtersRegEx.pattern];
			sentryEvent.fingerprint = _.concat(
				[fingerprint],
				sentryEvent.fingerprint || [],
			);

			logSentryEvent(sentryEvent);
		}
	}
});
