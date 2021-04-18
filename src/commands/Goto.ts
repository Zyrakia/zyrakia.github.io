import {Terminal} from '../terminal/Terminal';
import {Executor} from '../commander/command/Executor';
import {Argument} from '../commander/argument/Argument';
import {Command} from '../commander/command/Command';
import {Sender} from '../commander/command/Sender';
import {Description} from '../commander/command/Description';

class Goto implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		//TODO relocate to URL in first argument
	}
}

export const GotoCommand = Command.new('goto', Description.of('Go to a specified URL.'));
