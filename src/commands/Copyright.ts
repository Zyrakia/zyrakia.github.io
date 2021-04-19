import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Executor} from '../commander/command/Executor';
import {Sender} from '../commander/command/Sender';
import {Line, LineType} from '../terminal/Line';
import {Terminal} from '../terminal/Terminal';

class Copyright implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;
		await sender.sendMessage(Line.of('External content used: ').setType(LineType.START));
		await sender.sendMessage(
			Line.of(
				`<a target="_blank" href="https://fonts.google.com/specimen/Roboto+Mono">Robot Mono - Google Fonts</a>`,
			)
				.setType(LineType.INDENT)
				.setIndentLevel(1),
		);
		await sender.sendMessage(
			Line.of('Almost everything is made in house :)').setType(LineType.END),
		);
	}
}

export const CopyrightCommand = Command.new(
	'copyright',
	Description.of('View credit and copyright information.'),
).setExecutor(new Copyright());
