export function charCodeToString(charArray: number[]): string {
	let stringResult: string = '';
	for (const char of charArray) {
		stringResult += String.fromCharCode(char);
	}
	return stringResult;
}
