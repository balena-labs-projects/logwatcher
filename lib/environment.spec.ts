import { sentryConfig } from './environment';

test('sentry config is initialized', () => {
	expect(sentryConfig).toBeDefined();
	expect(sentryConfig.dsn).toBeDefined();
	expect(sentryConfig.tracesSampleRate).toBeDefined();
});
