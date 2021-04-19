import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Sender} from '../commander/command/Sender';

class About implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const response: Line[] = [];

		response.push(new Line('About Ole:', LineType.START));
		response.push(
			new Line('Ole was born in Germany and moved to Canada in 2013.', LineType.INDENT, 1, {
				delayAfter: 0,
				speed: 1,
			}),
		);
		response.push(
			new Line(
				'Since then he has found his passion in computer programming, specifically web development.',
				LineType.INDENT,
				1,
				{
					delayAfter: 0,
					speed: 1,
				},
			),
		);
		response.push(
			new Line(
				'He plans to seek out a post-secondary education in the field.',
				LineType.INDENT,
				1,
				{
					delayAfter: 0,
					speed: 1,
				},
			),
		);
		response.push(
			new Line(
				'Ole has a keen interest in retro technology and linguistics.',
				LineType.INDENT,
				1,
				{
					delayAfter: 0,
					speed: 1,
				},
			),
		);
		response.push(new Line('', LineType.RAW, 1));
		response.push(new Line('About This Website', LineType.START));
		response.push(
			new Line('This portfolio was inspired by retro terminals.', LineType.INDENT, 1, {
				delayAfter: 0,
				speed: 1,
			}),
		);
		response.push(
			new Line(
				'My choice of font is Roboto Mono, and the colour is green.',
				LineType.INDENT,
				1,
				{
					delayAfter: 0,
					speed: 1,
				},
			),
		);
		response.push(
			new Line(
				"Since old computers mostly only support green, it's perfect for this.",
				LineType.INDENT,
				1,
				{
					delayAfter: 0,
					speed: 1,
				},
			),
		);
		response.push(
			new Line(
				"It isn't the most traditional or useful website, but I've always wanted to make it.",
				LineType.INDENT,
				1,
				{
					delayAfter: 0,
					speed: 1,
				},
			),
		);

		for (const line of response) {
			await sender.sendMessage(line);
		}
	}
}

export const AboutCommand = Command.new(
	'about',
	Description.of('View a short description about myself and this website.'),
).setExecutor(new About());
