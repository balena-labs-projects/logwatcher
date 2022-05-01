import { logLevels } from './logger';

describe('logLevels', () => {
	test('should map priority to correct levels', () => {
		expect(logLevels[1]).toBe('fatal');
		expect(logLevels[2]).toBe('critical');
		expect(logLevels[3]).toBe('error');
		expect(logLevels[4]).toBe('warning');
		expect(logLevels[5]).toBe('log');
		expect(logLevels[6]).toBe('info');
		expect(logLevels[7]).toBe('debug');
	});
});
