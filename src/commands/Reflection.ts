import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Sender} from '../commander/command/Sender';

class Reflection implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		await sender.sendMessage(Line.of('Course reflection:').setType(LineType.START));
		await sender.sendMessage(
			Line.of('Overall, I really enjoyed finally creating this website.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of('In this course, the biggest thing I will take away is the Adobe experience.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of(
				'That might seem like a anticlimatic takeaway, but with how big Adobe is, that experience is invaluable.',
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of(
				'Learning about Adobe products, and how to use them for graphic design has been incredibly useful.',
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);

		await sender.sendMessage(Line.of('Website reflection:').setType(LineType.START));
		await sender.sendMessage(
			Line.of('Terminals are confusing and ugly for the every day person.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of(
				'So, I wanted to create an emulation that is more user friendly and interesting to look at.',
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of('While this website is still more difficult to use than others, it is doable.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of('I want people to feel like they are actually using a retro terminal.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of(
				'I used a monospace font to emulate hard edges, and three colours, green and black and blue, for simplicity.',
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of(
				'Now unfortunately I know the only layout scheme is that everything is on the left of the screen.',
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of('Also some of the sections are spaced out and coloured differently.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of(
				'But because I really wanted to create a website like this I hoped that it would be okay...',
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of('It still looks nice though, and everything is easy to read and find.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
		await sender.sendMessage(
			Line.of('Also the limited initial content given to the user is an instant eye guide.')
				.setType(LineType.INDENT)
				.setIndentLevel(1)
				.setAnimationSettings({speed: 1, delayAfter: 0}),
		);
	}
}

export const ReflectionCommand = Command.new(
	'reflection',
	Description.of('View my reflection after completing this project.'),
)
	.setHidden(true)
	.setExecutor(new Reflection());
