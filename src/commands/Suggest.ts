import {Terminal} from '../terminal/Terminal';
import {Line} from '../terminal/Line';
import {Command} from '../commander/command/Command';
import {Executor} from '../commander/command/Executor';
import {Description} from '../commander/command/Description';
import {Argument} from '../commander/argument/Argument';
import {Sender} from '../commander/command/Sender';

class Suggest implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		const def = new Line("Enter your suggestion, or 'cancel':");

		await sender.sendMessage(def);
		// const response = await this.openInput(terminal);

		//TODO add input

		// if (response.trim().toLowerCase() === 'cancel') {
		// 	await sender.sendMessage(new Line('Action cancelled...'));
		// 	return;
		// }

		await sender.sendMessage(new Line('I have yet to connect my API :('));
	}
}

export const SuggestCommand = Command.new(
	'suggest',
	Description.of('Suggest a feature to me (Zyrakia)!'),
).setExecutor(new Suggest());
