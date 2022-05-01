import { NodeOptions } from '@sentry/node';

// Map trigger keywords to fingerprint names
interface Triggers {
	[keyword: string]: string;
}

// Parse trigger keywords
export const triggers: Triggers = {};
Object.keys(process.env).forEach((key) => {
	if (key.indexOf('LW_') === 0) {
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

export const isDevelopment = process.env.NODE_ENV === 'development';
