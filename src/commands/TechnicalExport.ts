class TechnicalExport extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'techexport',
		hidden: true,
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const saveContent = TerminalStringer.toString(terminal);
		navigator.clipboard.writeText(saveContent);

		await terminal.addLines(
			new TerminalLine('Saved technical terminal contents to clipboard.')
		);

		terminal.openInput();
	}
}
