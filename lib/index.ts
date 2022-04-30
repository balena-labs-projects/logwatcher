import * as Sentry from '@sentry/node';
import Journalctl from '@seydx/journalctl';
import _ from 'lodash';
import { sentryConfig, triggers } from './environment';

// Map of journald log priority levels to Sentry severity levels
const logLevels = {
	'1': Sentry.Severity.Fatal,
	'2': Sentry.Severity.Critical,
	'3': Sentry.Severity.Error,
	'4': Sentry.Severity.Warning,
	'5': Sentry.Severity.Log,
	'6': Sentry.Severity.Info,
	'7': Sentry.Severity.Debug,
};

// tslint:disable-next-line: no-var-requires
const { version } = require('../package.json');
Sentry.init({
	...sentryConfig,
	release: version,
});

const filters = _.uniq(Object.keys(triggers));
new Journalctl({
	filters,
}).on('event', (event: any) => {
	for (const filter of filters) {
		if (event.MESSAGE.indexOf(filter) !== -1) {
			Sentry.captureEvent({
				message: event.MESSAGE,
				fingerprint: [triggers[filter]],
				level: logLevels[event.PRIORITY],
			});
		}
	}
});
