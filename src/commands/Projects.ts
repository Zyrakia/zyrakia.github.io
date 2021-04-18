import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Sender} from '../commander/command/Sender';
import {Description} from '../commander/command/Description';

class Projects implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const response: Line[] = [];

		response.push(new Line('My projects:', LineType.START));

		response.push(new Line('This website', LineType.INDENT, 1));
		response.push(
			new Line(
				'<a target="_blank" href="https://www.npmjs.com/package/tmijs-commander">TMIJS Commander</a>',
				LineType.INDENT,
				1,
			),
		);
		response.push(
			new Line(
				'<a target="_blank" href="https://zyrakia.github.io/HyperStatus/">HyperStatus (Abandoned, might redo someday)</a>',
				LineType.INDENT,
				1,
			),
		);

		response.push(new Line('Everything else is boring...', LineType.END));

		for (const line of response) {
			await sender.sendMessage(line);
		}
	}
}

export const ProjectsCommand = Command.new(
	'projects',
	Description.of('View my projects.'),
).setExecutor(new Projects());
