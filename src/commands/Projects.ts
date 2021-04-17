class ProjectsCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'projects',
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const response: TerminalLine[] = [];

		response.push(new TerminalLine('My projects:', LineType.START));

		response.push(new TerminalLine('This website', LineType.INDENT, 1));
		response.push(
			new TerminalLine(
				'<a target="_blank" href="https://www.npmjs.com/package/tmijs-commander">TMIJS Commander</a>',
				LineType.INDENT,
				1
			)
		);
		response.push(
			new TerminalLine(
				'<a target="_blank" href="https://zyrakia.github.io/HyperStatus/">HyperStatus (Abandoned, might redo someday)</a>',
				LineType.INDENT,
				1
			)
		);

		response.push(new TerminalLine('Everything else is boring...', LineType.END));

		await terminal.addLines(...response);
		terminal.openInput();
	}
}
