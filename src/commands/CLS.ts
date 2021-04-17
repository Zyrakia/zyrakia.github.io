import {Terminal} from '../terminal/Terminal';
import {TerminalCommand, CommandProperties} from '../terminal/TerminalCommand';

export class CLSCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'cls',
	};

	public async invoke(terminal: Terminal): Promise<void> {
		terminal.clear();
		terminal.openInput();
	}
}
