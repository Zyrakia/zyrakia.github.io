import split from 'split-string';

export class CommandParser {
	private constructor() {}

	public static parse(input: string) {
		const parts = split(input, {
			quotes: true,
			brackets: true,
			separator: ' ',
		});

		if (!parts || !parts.length) return;

		const identifier = parts[0];

		const args: string[] = [];
		if (parts.length > 1) args.push(...parts.slice(1));

		return {identifier, args};
	}
}
