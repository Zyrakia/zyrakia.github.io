import {Command} from './command/Command';
import {Sender} from './command/Sender';
import {CommandParser} from './CommandParser';
import {CommandRegistry} from './CommandRegistry';

export class Commander {
	private commandRegistry = new CommandRegistry();

	public async execute(input: string, sender: Sender) {
		const parts = CommandParser.parse(input);

		if (!parts || parts.identifier.includes(' ')) return;

		const foundCommand = this.commandRegistry.find(parts.identifier);

		if (foundCommand) await foundCommand.run(parts.args, sender, parts.identifier);
	}

	public setCommands(...commands: Command[]) {
		this.commandRegistry.set(...commands);
		return this;
	}

	public addCommands(...commands: Command[]) {
		this.commandRegistry.add(...commands);
		return this;
	}

	public getCommandRegistry() {
		return this.commandRegistry;
	}
}
