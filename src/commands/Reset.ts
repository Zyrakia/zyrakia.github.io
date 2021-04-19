import {Argument} from '../commander/argument/Argument';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Executor} from '../commander/command/Executor';
import {Sender} from '../commander/command/Sender';
import {Terminal} from '../terminal/Terminal';

class Reset implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;
		sender.clear();
		await sender.sayDefaults();
	}
}

export const ResetCommand = Command.new(
	'reset',
	Description.of('Clear the terminal and display the starting message.'),
)
	.setExecutor(new Reset())
	.setHidden(true);
