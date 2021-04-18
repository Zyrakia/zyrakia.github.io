import {Terminal} from '../terminal/Terminal';
import {Line} from '../terminal/Line';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Executor} from '../commander/command/Executor';
import {Argument} from '../commander/argument/Argument';
import {Sender} from '../commander/command/Sender';

class Export implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		sender.export();
		await sender.sendMessage(new Line('Saved terminal contents to clipboard.'));
	}
}

export const ExportCommand = Command.new(
	'export',
	Description.of('Export the terminal contents to your clipboard.'),
).setExecutor(new Export());
