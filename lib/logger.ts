import * as Sentry from '@sentry/node';
import _ from 'lodash';
import { isDevelopment, sentryConfig } from './environment';

// tslint:disable-next-line: no-var-requires
const { version } = require('../package.json');

Sentry.init({
	...sentryConfig,
	release: version,
});

export interface LogLevels {
	[priority: number]: Sentry.Severity | undefined;
}

// Map of journald log priority levels to Sentry severity levels
export const logLevels: LogLevels = {
	1: Sentry.Severity.Fatal,
	2: Sentry.Severity.Critical,
	3: Sentry.Severity.Error,
	4: Sentry.Severity.Warning,
	5: Sentry.Severity.Log,
	6: Sentry.Severity.Info,
	7: Sentry.Severity.Debug,
};

export function logEvent(
	priority: number,
	fingerprint: string,
	message: string,
) {
	if (isDevelopment) {
		console.debug(JSON.stringify({ priority, fingerprint, message }, null, 4));
	}
	Sentry.captureEvent({
		message,
		fingerprint: [fingerprint],
		level: logLevels[priority] || Sentry.Severity.Info,
	});
}
