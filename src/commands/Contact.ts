import {Terminal} from '../terminal/Terminal';
import {TerminalCommand, CommandProperties} from '../terminal/TerminalCommand';
import {TerminalLine, LineType} from '../terminal/TerminalLine';

export class ContactCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'contact',
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const response: TerminalLine[] = [];

		response.push(new TerminalLine('My socials:', LineType.START));

		response.push(
			new TerminalLine(
				'<a target="_blank" href="https://www.twitter.com/zyrakia">Twitter: @Zyrakia</a>',
				LineType.INDENT,
				1,
			),
		);
		response.push(new TerminalLine('Email: mailzyrakia@gmail.com', LineType.INDENT, 1));

		response.push(new TerminalLine('But why contact me?!', LineType.END));

		await terminal.addLines(...response);
		terminal.openInput();
	}
}
