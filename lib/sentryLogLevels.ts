import * as Sentry from '@sentry/node';

export interface TextLogLevels {
	[priority: string]: Sentry.Severity | undefined;
}

// Map of string log levels to Sentry severity levels
export const sentryTextLogLevels: TextLogLevels = {
	emerg: Sentry.Severity.Fatal,
	panic: Sentry.Severity.Fatal,
	fatal: Sentry.Severity.Fatal,
	alert: Sentry.Severity.Critical,
	crit: Sentry.Severity.Critical,
	err: Sentry.Severity.Error,
	error: Sentry.Severity.Error,
	warn: Sentry.Severity.Warning,
	warning: Sentry.Severity.Warning,
	log: Sentry.Severity.Log,
	notice: Sentry.Severity.Log,
	info: Sentry.Severity.Info,
	debug: Sentry.Severity.Debug,
};

export interface LogLevelsPriorities {
	[priority: string]: number;
}

// Map of string log levels to int priorities
export const logLevelsToPriorities: LogLevelsPriorities = {
	emerg: 0,
	panic: 0, // deprecated
	fatal: 0, // only Sentry
	alert: 1,
	crit: 2,
	err: 3,
	error: 3, // deprecated
	warning: 4,
	warn: 4, // deprecated
	notice: 5,
	log: 5, // only for Sentry
	info: 6,
	debug: 7,
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
