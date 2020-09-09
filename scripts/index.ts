const terminal = new Terminal();

terminal.render(document.querySelector('body'), 'prepend');

terminal.registerCommands(
	new HelpCommand(),
	new ProjectsCommand(),
	new AboutCommand(),
	new ContactCommand(),
	new CLSCommand(),
	new ResetCommand(),
	new EchoCommand(),
	new ExportCommand(),
	new TechnicalExport(),
	new GotoCommand(),
	new PICommand(),
	new SuggestCommand()
);

window.addEventListener('load', async () => {
	const lines = localStorage.getItem('previousLines');

	if (lines) {
		const parsedLines = TerminalStringer.linesFromString(lines);

		parsedLines.forEach((line) => {
			line.setAnimateTyping(false).setDelayAfter(0).setDelayBefore(0);
		});

		await terminal.addLines(...parsedLines);
		localStorage.removeItem('previousLines');
		terminal.openInput();
	} else terminal.addDefaults();
});

window.addEventListener('beforeunload', () => {
	if (terminal.getLines().length > 1) {
		const linesToSave = TerminalStringer.toString(terminal);
		localStorage.setItem('previousLines', linesToSave);
	}
});
