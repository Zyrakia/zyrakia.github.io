// import {Terminal} from './Terminal';
// import {LineAnimationSettings, LineType, lineTypeSymbols, Line} from './Line';

// export class TerminalStringer {
// 	private static readonly propertySeperator = '-';
// 	private static readonly propertyContentSeperator = '||';
// 	private static readonly animationSettingsPrefix = '(';
// 	private static readonly animationSettingsSuffix = ')';

// 	public static toString(terminal: Terminal) {
// 		const convertedLines: string[] = [];

// 		terminal.getLines().forEach((line) => {
// 			convertedLines.push(this.lineToString(line));
// 		});

// 		return convertedLines.join('\n');
// 	}

// 	public static toReadableString(terminal: Terminal) {
// 		const convertedLines: string[] = [];

// 		terminal.getLines().forEach((line) => {
// 			convertedLines.push(this.lineToReadableString(line));
// 		});

// 		return convertedLines.join('\n');
// 	}

// 	public static lineToString(terminalLine: Line) {
// 		const animationSettings = terminalLine.getAnimationSettings();

// 		let build = '';

// 		build += terminalLine.getType() + TerminalStringer.propertySeperator;
// 		build += terminalLine.getIndentLevel() + TerminalStringer.propertySeperator;

// 		build += TerminalStringer.animationSettingsPrefix;
// 		Object.values(animationSettings).forEach((val, i) => {
// 			build += val;

// 			if (i !== Object.keys(animationSettings).length - 1)
// 				build += TerminalStringer.propertySeperator;
// 		});
// 		build += TerminalStringer.animationSettingsSuffix;

// 		build += TerminalStringer.propertyContentSeperator;
// 		build += terminalLine.getContent();

// 		return build;
// 	}

// 	public static lineToReadableString(terminalLine: Line) {
// 		let build = '';

// 		if (terminalLine.getType() === LineType.START) build += '\n';

// 		for (let i = 0; i < terminalLine.getIndentLevel(); i++) {
// 			build += '	';
// 		}

// 		build += lineTypeSymbols.get(terminalLine.getType()) + ' ';
// 		build += terminalLine.getContent();

// 		if (terminalLine.getType() === LineType.END) build += '\n';

// 		return build;
// 	}

// 	public static linesFromString(str: string) {
// 		const lines = str.split('\n');

// 		const parsedLines: Line[] = [];
// 		lines.forEach((line) => {
// 			const parsedLine = this.lineFromString(line);
// 			if (parsedLine) parsedLines.push(parsedLine);
// 		});

// 		return parsedLines;
// 	}

// 	public static lineFromString(str: string) {
// 		//PARSE PROPERTIES
// 		const propertyContentSplit = str.split(TerminalStringer.propertyContentSeperator);
// 		if (propertyContentSplit.length !== 2) return;

// 		const line = new Line();

// 		const linePropsAndAnimSettings = propertyContentSplit[0].split(
// 			TerminalStringer.propertySeperator,
// 		);
// 		line.setContent(propertyContentSplit[1]);

// 		const lineProps = linePropsAndAnimSettings.splice(0, 2);

// 		const lineType = LineType[<LineType>lineProps[0].toUpperCase()];
// 		if (!lineType) return;
// 		line.setType(lineType);

// 		const indentLevel = isNaN(+lineProps[1]) ? 0 : +lineProps[1];
// 		line.setIndentLevel(indentLevel);

// 		//VALIDATE ANIMATION SETTINGS
// 		const animationSettingsString = linePropsAndAnimSettings.join(
// 			TerminalStringer.propertySeperator,
// 		);
// 		if (
// 			!animationSettingsString.startsWith(TerminalStringer.animationSettingsPrefix) ||
// 			!animationSettingsString.endsWith(TerminalStringer.animationSettingsSuffix)
// 		)
// 			return;

// 		const animationSettings = animationSettingsString
// 			.replace(TerminalStringer.animationSettingsPrefix, '')
// 			.replace(TerminalStringer.animationSettingsSuffix, '')
// 			.split(TerminalStringer.propertySeperator);

// 		const defaultsIterator = Object.keys(Line.ANIMATION_SETTINGS_DEFAULTS);

// 		if (animationSettings.length !== defaultsIterator.length) return;

// 		//PARSE ANIMATION SETTINGS
// 		const animationSettingsBuild = {} as any;
// 		const animationSettingsDefaults = {...Line.ANIMATION_SETTINGS_DEFAULTS} as any;

// 		defaultsIterator.forEach((value, i) => {
// 			const currentSetting = animationSettings[i];
// 			const currentDefault = animationSettingsDefaults[value];

// 			const desiredType = typeof currentDefault;

// 			let parsedValue: any;
// 			try {
// 				parsedValue = JSON.parse(currentSetting);
// 				if (typeof parsedValue !== desiredType) throw new Error();
// 			} catch (err) {
// 				parsedValue = currentDefault;
// 			}

// 			animationSettingsBuild[value] = parsedValue;
// 		});

// 		line.setAnimationSettings(animationSettingsBuild as LineAnimationSettings);

// 		return line;
// 	}
// }
