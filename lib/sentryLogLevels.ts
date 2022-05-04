import * as Sentry from '@sentry/node';

export interface TextLogLevels {
	[priority: string]: Sentry.Severity | undefined;
}

// Map of string log levels to Sentry severity levels
export const sentryTextLogLevels: TextLogLevels = {
	emerg: Sentry.Severity.Fatal,
	fatal: Sentry.Severity.Fatal,
	crit: Sentry.Severity.Critical,
	error: Sentry.Severity.Error,
	warn: Sentry.Severity.Warning,
	log: Sentry.Severity.Log,
	info: Sentry.Severity.Info,
	debug: Sentry.Severity.Debug,
};

export interface LogLevels {
	[priority: number]: Sentry.Severity | undefined;
}

// Map of journald log priority levels to Sentry severity levels
export const logLevels: LogLevels = {
	0: Sentry.Severity.Fatal,
	1: Sentry.Severity.Fatal,
	2: Sentry.Severity.Critical,
	3: Sentry.Severity.Error,
	4: Sentry.Severity.Warning,
	5: Sentry.Severity.Log,
	6: Sentry.Severity.Info,
	7: Sentry.Severity.Debug,
};
