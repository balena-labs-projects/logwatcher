import type { NodeOptions } from '@sentry/node';
import { logLevelsToPriorities } from './sentryLogLevels';

// Map trigger keywords to fingerprint names
interface Triggers {
	[keyword: string]: string;
}

// Parse trigger keywords
export const triggers: Triggers = {};

interface LogwatcherOptions {
	defaultLogLevel?: string;
	defaultLogLevelPriority?: number;
}

export const options: LogwatcherOptions = {};

Object.keys(process.env).forEach((key) => {
	if (key === 'LW_LEVEL_DEFAULT') {
		options.defaultLogLevel = process.env[key];
		if (options.defaultLogLevel != null) {
			options.defaultLogLevelPriority =
				logLevelsToPriorities[options.defaultLogLevel];
		}
	} else if (key.indexOf('LW_LEVEL') === 0) {
		// process levels per logger ( app )
	} else if (key.indexOf('LW_') === 0) {
		const fingerprint = key.substring(3);
		const keywords = process.env[key]?.split(',');
		keywords?.forEach((keyword: string) => {
			if (triggers[keyword]) {
				throw new Error('Duplicate keyword: ' + keyword);
			}
			triggers[keyword] = fingerprint;
		});
	}
});

// Parse Sentry configuration
export const sentryConfig: NodeOptions = {
	dsn: process.env.SENTRY_DSN || '',
	tracesSampleRate: parseInt(
		process.env.SENTRY_TRACES_SAMPLE_RATE || '1.0',
		10,
	),
};

export const isDebug = process.env.DEBUG === '1';
