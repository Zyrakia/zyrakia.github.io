class ResetCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'reset',
		hidden: true,
	};

	public async invoke(terminal: Terminal): Promise<void> {
		terminal.clear();
		terminal.addDefaults();
	}
}
