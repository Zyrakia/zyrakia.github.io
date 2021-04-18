import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Argument} from '../commander/argument/Argument';
import {Sender} from '../commander/command/Sender';

class Contact implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const response: Line[] = [];
		response.push(new Line('My socials:', LineType.START));
		response.push(
			new Line(
				'<a target="_blank" href="https://www.twitter.com/zyrakia">Twitter: @Zyrakia</a>',
				LineType.INDENT,
				1,
			),
		);
		response.push(new Line('Email: mailzyrakia@gmail.com', LineType.INDENT, 1));
		response.push(new Line('But why contact me?!', LineType.END));

		for (const line of response) await sender.sendMessage(line);
	}
}

export const ContactCommand = Command.new(
	'contact',
	Description.of('See where you can contact me.'),
).setExecutor(new Contact());
