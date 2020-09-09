type InputContext = 'global' | TerminalCommand;

class Terminal extends Renderable<HTMLSpanElement> {
	private commandInputElement: HTMLSpanElement;
	private commands: TerminalCommand[] = [];

	private lines: TerminalLine[] = [];

	private previousInput = '';

	private inputContext: InputContext;

	constructor() {
		super();
		this.genCommandInputElement();
	}

	/** @override */
	public render(to: HTMLElement, renderMethod: RenderMethod = 'append') {
		if (renderMethod === 'append') to.appendChild(this.parentElement);
		else to.prepend(this.parentElement);
	}

	public async addLines(...lines: TerminalLine[]) {
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			this.lines.push(line);
			this.parentElement.appendChild(line.getElement());
			await new Typewriter(line).start();
		}
	}

	public async addDefaults() {
		await this.addLines(
			new TerminalLine("Enter a command... try 'projects' or 'help'").setDelayAfter(0)
		);

		this.openInput();
	}

	protected generateParentElement() {
		const element = document.createElement('section');

		element.classList.add('terminal');
		element.tabIndex = 0;

		return element;
	}

	private genCommandInputElement() {
		const element = document.createElement('span');

		element.classList.add('command_input');
		element.contentEditable = 'true';
		element.spellcheck = false;

		element.addEventListener('blur', () => {
			element.focus();
		});

		element.addEventListener('keydown', (e: KeyboardEvent) => {
			switch (e.keyCode) {
				case 13: {
					e.preventDefault();
					if (element.innerText.trim() !== '') {
						this.parentElement.removeChild(this.commandInputElement);
						this.dispatchCommand(this.commandInputElement.innerText);
						this.commandInputElement.innerText = '';
					}
					break;
				}

				case 38:
					if (this.previousInput) this.commandInputElement.innerText = this.previousInput;
			}
		});

		this.commandInputElement = element;
	}

	public openInput(context: 'global' | TerminalCommand = 'global') {
		this.parentElement.appendChild(this.commandInputElement);
		this.parentElement.focus();
		this.commandInputElement.focus();
		this.commandInputElement.scrollIntoView();
		this.inputContext = context;
	}

	public dispatchCommand(content: string) {
		if (this.inputContext !== 'global') {
			this.inputContext.takeInput(content);
			return;
		}

		this.previousInput = content;

		const parser = new TerminalCommandParser(content, this);
		if (!parser.isValid()) {
			terminal
				.addLines(new TerminalLine("That's not right... try 'help'?").setDelayAfter(0))
				.then(() => {
					terminal.openInput();
				});
			return;
		}

		parser.getCommand().invoke(this, parser.getArgs());
	}

	public clear() {
		this.lines = [];
		this.parentElement.innerHTML = '';
	}

	public registerCommands(...commands: TerminalCommand[]) {
		commands.forEach((cmd) => {
			this.commands.push(cmd);
		});
	}

	public getCommandInputElement() {
		return this.commandInputElement;
	}

	public getCommands() {
		return this.commands;
	}

	public getCommandIdentifiers() {
		return this.commands.map((cmd) => cmd.getProperties().identifier);
	}

	public getLines() {
		return this.lines;
	}
}
