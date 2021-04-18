import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Sender} from '../commander/command/Sender';

class Help implements Executor {
	private readonly PER_PAGE = 5;

	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const response: Line[] = [];
		const commands = [...sender.getCommander().getCommandRegistry().getCommands()].filter(
			(cmd) => !cmd.getHidden(),
		);

		const pages = Math.ceil(commands.length / this.PER_PAGE);
		let pageNum: number;
		let page: Command[];

		if (args[0] && !isNaN(+args[0])) {
			pageNum = +args[0];
		} else pageNum = 1;

		pageNum = this.contain(pageNum, pages, 1);
		page = commands.splice((pageNum - 1) * this.PER_PAGE, this.PER_PAGE);

		response.push(
			new Line(
				`Available commands: (${pageNum}/${pages})`,
				LineType.START,
			).setAnimationSettings({
				speed: 1,
				delayAfter: 0,
			}),
		);

		page.forEach((cmd) => {
			const identifier = cmd.getIdentifier();
			const desc = cmd.getDescriptionText();
			response.push(
				new Line(`'${identifier}' - ${desc}`, LineType.INDENT, 1).setAnimationSettings({
					speed: 1,
					delayAfter: 0,
				}),
			);
		});

		for (const line of response) {
			await sender.sendMessage(line);
		}
	}

	private contain(n: number, max: number, min: number) {
		n = Math.round(n);
		if (n > max) n = max;
		if (n < min) n = min;
		return n;
	}
}

export const HelpCommand = Command.new(
	'help',
	Description.of('List and describe available commands.'),
	['?'],
).setExecutor(new Help());
