import {Terminal} from '../terminal/Terminal';
import {TerminalCommand, CommandProperties} from '../terminal/TerminalCommand';
import {TerminalLine} from '../terminal/TerminalLine';
import {TerminalStringer} from '../terminal/TerminalStringer';

export class TechnicalExport extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'techexport',
		hidden: true,
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const saveContent = TerminalStringer.toString(terminal);
		navigator.clipboard.writeText(saveContent);

		await terminal.addLines(
			new TerminalLine('Saved technical terminal contents to clipboard.'),
		);

		terminal.openInput();
	}
}
