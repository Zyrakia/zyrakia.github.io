import {Terminal} from '../terminal/Terminal';
import {TerminalCommand, CommandProperties} from '../terminal/TerminalCommand';
import {TerminalLine, LineType} from '../terminal/TerminalLine';

export class EchoCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'echo',
		usage: '[...contents]',
	};

	public async invoke(terminal: Terminal, args: string[]): Promise<void> {
		const echoContent = args.join(' ');

		if (!echoContent) {
			await terminal.addLines(new TerminalLine('Well at least give me something to echo...'));
			terminal.openInput();
			return;
		}

		await terminal.addLines(new TerminalLine(`${echoContent}`, LineType.RAW));
		terminal.openInput();
	}
}
