import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Description} from '../commander/command/Description';
import {Argument} from '../commander/argument/Argument';
import {Sender} from '../commander/command/Sender';

class Echo implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const echoContent = args.join(' ');

		if (!echoContent) {
			await sender.sendMessage(new Line('Well at least give me something to echo...'));
			return;
		}

		await sender.sendMessage(new Line(`${echoContent}`, LineType.RAW));
	}
}

export const EchoCommand = Command.new(
	'echo',
	Description.of('Echo anything you write to the terminal.'),
).setExecutor(new Echo());
