class GotoCommand extends TerminalCommand {
	protected readonly properties: CommandProperties = {
		identifier: 'goto',
		usage: '(url)',
	};

	public async invoke(terminal: Terminal, args: string[]): Promise<void> {
		let location = args[0];

		if (!location) {
			await terminal.addLines(new TerminalLine('Where would you like to go?'));
			location = await this.openInput(terminal);
		}

		if (!location.includes('https://') || !location.includes('http://'))
			location = 'https://' + location;

		try {
			window.location.replace(location);
		} catch (error) {
			await terminal.addLines(new TerminalLine('How do you expect me to send you there!?'));
			terminal.openInput();
		}
	}
}
