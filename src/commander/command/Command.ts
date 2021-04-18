import {Argument} from '../argument/Argument';
import {Executor} from './Executor';
import {Description} from './Description';
import {Sender} from './Sender';

export class Command {
	private identifier: string;
	private description: Description;
	private aliases: string[];
	private args: string[];

	private enabled = true;
	private hidden = false;

	private executor: Executor;

	private constructor(
		identifier: string,
		description = Description.EMPTY,
		aliases: string[],
		args: string[],
	) {
		this.identifier = identifier;
		this.description = description;
		this.aliases = aliases;
		this.args = args;
	}

	public async run(args: string[], sender: Sender, label: string) {
		await this.executor.run(this, args, sender, label);
	}

	public static new(
		identifier: string,
		description = Description.EMPTY,
		aliases: string[] = [],
		args: string[] = [],
	) {
		return new Command(identifier, description, aliases, args);
	}

	public getIdentifier() {
		return this.identifier;
	}

	public setIdentifier(identifier: string) {
		this.identifier = identifier;
		return this;
	}

	public getDescription() {
		return this.description;
	}

	public getDescriptionText() {
		return this.description.getDescription();
	}

	public setDescription(description: Description) {
		this.description = description;
		return this;
	}

	public getAliases() {
		return this.aliases;
	}

	public setAliases(aliases: string[]) {
		this.aliases = aliases;
		return this;
	}

	public addAliases(...aliases: string[]) {
		this.aliases.push(...aliases);
		return this;
	}

	public hasAlias(alias: string) {
		return this.aliases.includes(alias);
	}

	public getArgs() {
		return this.args;
	}

	public setArgs(args: string[]) {
		this.args = args;
		return this;
	}

	public addArgs(...argument: Argument[]) {
		this.args.push(...argument);
		return this;
	}

	public getEnabled() {
		return this.enabled;
	}

	public setEnabled(enabled: boolean) {
		this.enabled = enabled;
		return this;
	}

	public getHidden() {
		return this.hidden;
	}

	public setHidden(hidden: boolean) {
		this.hidden = hidden;
		return this;
	}

	public getExecutor() {
		return this.executor;
	}

	public setExecutor(executor: Executor) {
		this.executor = executor;
		return this;
	}
}
