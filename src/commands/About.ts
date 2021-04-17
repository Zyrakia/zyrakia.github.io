import {Terminal} from '../terminal/Terminal';
import {TerminalCommand, CommandProperties} from '../terminal/TerminalCommand';
import {TerminalLine, LineType} from '../terminal/TerminalLine';

export class AboutCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'about',
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const response: TerminalLine[] = [];

		response.push(new TerminalLine('About me:', LineType.START));

		response.push(new TerminalLine('', LineType.RAW));
		response.push(new TerminalLine('', LineType.RAW));
		response.push(new TerminalLine('I like web development.', LineType.INDENT, 1));
		response.push(new TerminalLine('', LineType.RAW));
		response.push(new TerminalLine('', LineType.RAW));

		response.push(new TerminalLine("Who cares, try 'projects'.", LineType.END));

		await terminal.addLines(...response);
		terminal.openInput();
	}
}
