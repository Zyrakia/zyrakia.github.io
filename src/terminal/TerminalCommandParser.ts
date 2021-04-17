import {Terminal} from './Terminal';
import {TerminalCommand} from './TerminalCommand';

export class TerminalCommandParser {
	private str: string;
	private terminal: Terminal;

	private command: TerminalCommand;
	private identifier: string;
	private args: string[];

	private valid: boolean;

	constructor(strToParse: string, terminal: Terminal) {
		this.str = strToParse;
		this.terminal = terminal;
		this.valid = this.parse();
	}

	private parse() {
		if (!this.validate()) return false;

		const split = this.str.split(' ');

		this.identifier = split.splice(0, 1)[0].trim().toLowerCase();
		this.args = [...split];

		const foundCommand = this.terminal
			.getCommands()
			.find((cmd) => cmd.getProperties().identifier.toLowerCase() === this.identifier);

		if (!foundCommand) return false;
		this.command = foundCommand;

		return true;
	}

	private validate() {
		if (!this.str.trim()) return false;
		if (this.str.split(' ')[0].includes("'")) return false;

		return true;
	}

	public isValid() {
		return this.valid;
	}

	public hasArgs() {
		return !!this.args.length;
	}

	public getCommand() {
		return this.command;
	}

	public getIdentifier() {
		return this.identifier;
	}

	public getArgs() {
		return this.args;
	}
}
