// Map trigger keywords to fingerprint names
interface Triggers {
	[keyword: string]: string;
}

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
