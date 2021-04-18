import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Sender} from '../commander/command/Sender';
import {Description} from '../commander/command/Description';

class TechnicalExport implements Executor {
	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		//TODO export technical details
		// const saveContent = TerminalStringer.toString(terminal);
		// navigator.clipboard.writeText(saveContent);
		// await terminal.addLines(new Line('Saved technical terminal contents to clipboard.'));
	}
}

export const TechnicalExportCommand = Command.new(
	'techexport',
	Description.of('Export the technical terminal contents to your clipboard.'),
)
	.setHidden(true)
	.setExecutor(new TechnicalExport());
