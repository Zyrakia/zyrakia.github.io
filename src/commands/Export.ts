class ExportCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'export',
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const saveContent = TerminalStringer.toReadableString(terminal);
		navigator.clipboard.writeText(saveContent);

		await terminal.addLines(new TerminalLine('Saved terminal contents to clipboard.'));
		terminal.openInput();
	}
}
