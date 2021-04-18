import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Argument} from '../commander/argument/Argument';
import {Sender} from '../commander/command/Sender';

class About implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const response: Line[] = [];

		response.push(new Line('About me:', LineType.START));

		response.push(new Line('', LineType.RAW));
		response.push(new Line('', LineType.RAW));
		response.push(new Line('I like web development.', LineType.INDENT, 1));
		response.push(new Line('', LineType.RAW));
		response.push(new Line('', LineType.RAW));

		response.push(new Line("Who cares, try 'projects'.", LineType.END));

		for (const line of response) {
			await sender.sendMessage(line);
		}
	}
}

export const AboutCommand = Command.new(
	'about',
	Description.of('View a short description about myself (Zyrakia).'),
).setExecutor(new About());
