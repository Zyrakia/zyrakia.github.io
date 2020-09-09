class SuggestCommand extends TerminalCommand {
	protected properties: CommandProperties = {
		identifier: 'suggest',
	};

	public async invoke(terminal: Terminal): Promise<void> {
		const def = new TerminalLine("Enter your suggestion, or 'cancel':");

		await terminal.addLines(def);
		const response = await this.openInput(terminal);

		if (response.trim().toLowerCase() === 'cancel') {
			await terminal.addLines(new TerminalLine('Action cancelled...'));
			terminal.openInput();
			return;
		}

		await terminal.addLines(new TerminalLine('I have yet to connect my API :('));
		console.log(response);
		terminal.openInput();
	}
}
