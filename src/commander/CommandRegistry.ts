import {Command} from './command/Command';
import {Description} from './command/Description';

export class CommandRegistry {
	private commands: Command[] = [];

	public constructor(...commands: Command[]) {
		this.commands.push(...commands);
	}

	public add(...commands: Command[]) {
		this.commands.push(...commands);
	}

	public set(...commands: Command[]) {
		this.commands = commands;
	}

	public removeCommands(...commands: Command[]) {
		const removedCommands: Command[] = [];

		for (const command of commands) {
			const removedCommand = this.remove(command);
			if (removedCommand) removedCommands.push(removedCommand);
		}

		return removedCommands;
	}

	public removeIdentifiers(...identifiers: string[]) {
		const removedCommands: Command[] = [];

		for (const identifier of identifiers) {
			const foundCommand = this.commands.find((cmd) => cmd.getIdentifier() === identifier);
			if (!foundCommand) continue;
			const removedCommand = this.remove(foundCommand);
			if (removedCommand) removedCommands.push(removedCommand);
		}

		return removedCommands;
	}

	public removeDescriptions(...descriptions: Description[]) {
		const removedCommands: Command[] = [];

		for (const description of descriptions) {
			const foundCommand = this.commands.find(
				(cmd) => cmd.getDescriptionText() === description.getDescription(),
			);
			if (!foundCommand) continue;
			const removedCommand = this.remove(foundCommand);
			if (removedCommand) removedCommands.push(removedCommand);
		}

		return removedCommands;
	}

	public removeAliases(...aliases: string[]) {
		const removedCommands: Command[] = [];

		for (const alias of aliases) {
			const foundCommand = this.commands.find((cmd) => cmd.hasAlias(alias));
			if (!foundCommand) continue;
			const removedCommand = this.remove(foundCommand);
			if (removedCommand) removedCommands.push(removedCommand);
		}

		return removedCommands;
	}

	public find(alias: string): Command | undefined {
		alias = alias.toLowerCase();

		return this.commands.find((cmd) => {
			if (cmd.getIdentifier().toLowerCase() === alias) return true;
			for (const cmdAlias of cmd.getAliases()) {
				if (cmdAlias.toLowerCase() === alias) return true;
			}
		});
	}

	private remove(command: Command): void | Command {
		const index = this.commands.indexOf(command);
		if (index === -1) return;
		else return this.commands.splice(index, 1)[0];
	}

	public getCommands() {
		return this.commands;
	}
}
