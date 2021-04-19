import {Terminal} from '../terminal/Terminal';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Sender} from '../commander/command/Sender';
import {Description} from '../commander/command/Description';
import {Line} from '../terminal/Line';

class Goto implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const url = args[0];

		if (!url) {
			await sender.sendMessage(Line.of('Well at least give me somewhere to go...'));
			return;
		}

		window.location.href = 'url';
	}
}

export const GotoCommand = Command.new(
	'goto',
	Description.of('Go to a specified URL.'),
).setExecutor(new Goto());
