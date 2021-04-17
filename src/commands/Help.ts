import {Terminal} from '../terminal/Terminal';
import {TerminalCommand, CommandProperties} from '../terminal/TerminalCommand';
import {TerminalLine, LineType} from '../terminal/TerminalLine';

export class HelpCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'help',
		usage: '(page)',
	};

	private readonly PER_PAGE = 5;

	public async invoke(terminal: Terminal, args: string[]): Promise<void> {
		const response: TerminalLine[] = [];
		const commands = [...terminal.getCommands()].filter((cmd) => !cmd.getProperties().hidden);

		const pages = Math.ceil(commands.length / this.PER_PAGE);
		let pageNum: number;
		let page: TerminalCommand[];

		if (args[0] && !isNaN(+args[0])) {
			pageNum = +args[0];
		} else pageNum = 1;

		pageNum = this.contain(pageNum, pages, 1);
		page = commands.splice((pageNum - 1) * this.PER_PAGE, this.PER_PAGE);

		response.push(
			new TerminalLine(`Available commands: (${pageNum}/${pages})`, LineType.START)
				.setAnimationSpeed(5)
				.setDelayAfter(0),
		);

		page.forEach((cmd) => {
			const {identifier, usage, hidden} = cmd.getProperties();
			if (!hidden) {
				response.push(
					new TerminalLine(
						`'${identifier}${usage ? ` ${usage}` : ''}'`,
						LineType.INDENT,
						1,
					)
						.setAnimationSpeed(5)
						.setDelayAfter(0),
				);
			}
		});

		await terminal.addLines(...response);
		terminal.openInput();
	}

	private contain(n: number, max: number, min: number) {
		n = Math.round(n);
		if (n > max) n = max;
		if (n < min) n = min;
		return n;
	}
}
