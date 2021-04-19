import '../styles/terminal.css';
import {Commander} from './commander/Commander';
import {Terminal} from './terminal/Terminal';
import {RenderMethod} from './utils/Element';
import * as Commands from './commands';

const commander = new Commander();
commander.addCommands(
	Commands.AboutCommand,
	Commands.ProjectCommand,
	Commands.CopyrightCommand,
	Commands.ContactCommand,
	Commands.ClearCommand,
	Commands.EchoCommand,
	Commands.GotoCommand,
	Commands.HelpCommand,
	Commands.PICommand,
	Commands.ResetCommand,
);
const terminal = new Terminal(commander);

terminal.render(document.querySelector('body'), RenderMethod.PREPEND);

// window.addEventListener('load', async () => {
// 	const lines = localStorage.getItem('previousLines');

// 	if (lines) {
// 		const parsedLines = TerminalStringer.linesFromString(lines);

// 		parsedLines.forEach((line) => {
// 			line.setAnimateTyping(false).setDelayAfter(0).setDelayBefore(0);
// 		});

// 		await terminal.addLines(...parsedLines);
// 		localStorage.removeItem('previousLines');
// 		terminal.openInput();
// 	} else terminal.addDefaults();
// });

// window.addEventListener('beforeunload', () => {
// 	if (terminal.getLines().length > 1) {
// 		const linesToSave = TerminalStringer.toString(terminal);
// 		localStorage.setItem('previousLines', linesToSave);
// 	}
// });
