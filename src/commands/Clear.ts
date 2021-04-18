import {Argument} from '../commander/argument/Argument';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Executor} from '../commander/command/Executor';
import {Sender} from '../commander/command/Sender';
import {Terminal} from '../terminal/Terminal';

class Clear implements Executor {
	public run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;
		sender.clear();
	}
}

export const ClearCommand = Command.new('clear', Description.of('Clear the terminal screen.'), [
	'cls',
]).setExecutor(new Clear());
