import {Renderable, RenderMethod} from '../utils/Renderable';
import {StringPredictor} from '../utils/StringPredictor';
import {TraversableArray} from '../utils/TraversableArray';
import {Typewriter} from '../utils/Typewriter';
import {TerminalCommand} from './TerminalCommand';
import {TerminalCommandParser} from './TerminalCommandParser';
import {TerminalLine} from './TerminalLine';

type InputContext = 'global' | TerminalCommand;

export class Terminal extends Renderable<HTMLSpanElement> {
	private commandInputElement: HTMLSpanElement;
	private commands: TerminalCommand[] = [];

	private lines: TerminalLine[] = [];
	private previousInputs = new TraversableArray();
	private inputContext: InputContext;

	private cmdPredictor: StringPredictor = new StringPredictor();
	private currentPrediction: string = '';

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
			new TerminalLine("Enter a command... try 'projects' or 'help'").setDelayAfter(0),
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
			switch (e.key) {
				case 'Tab': {
					e.preventDefault();

					if (this.currentPrediction) {
						this.commandInputElement.innerText += this.currentPrediction;
						this.currentPrediction = '';
						this.commandInputElement.setAttribute(
							'data-prediction',
							this.currentPrediction,
						);
					}

					break;
				}

				case 'Enter': {
					e.preventDefault();
					if (element.innerText.trim() !== '') {
						this.parentElement.removeChild(this.commandInputElement);
						this.dispatchCommand(this.commandInputElement.innerText);
						this.commandInputElement.innerText = '';
					}
					break;
				}

				case 'ArrowUp': {
					this.commandInputElement.innerText = this.previousInputs.prev();
					break;
				}

				case 'ArrowDown': {
					this.commandInputElement.innerText = this.previousInputs.next();
					break;
				}
			}

			this.currentPrediction = '';
			this.commandInputElement.setAttribute('data-prediction', this.currentPrediction);
		});

		element.addEventListener('keyup', (e: KeyboardEvent) => {
			switch (e.key) {
				case 'Backspace': {
					const content = this.commandInputElement.innerText;

					this.currentPrediction = this.cmdPredictor.predict(content) as string;

					this.commandInputElement.setAttribute(
						'data-prediction',
						this.currentPrediction,
					);

					break;
				}
			}
		});

		element.addEventListener('keypress', (e: KeyboardEvent) => {
			this.currentPrediction = this.cmdPredictor.predict(
				this.commandInputElement.innerText + e.key,
			) as string;

			this.commandInputElement.setAttribute('data-prediction', this.currentPrediction);
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

		this.currentPrediction = '';
		this.previousInputs.enter(content);
		this.previousInputs.to(this.previousInputs.len() - 1);

		const parser = new TerminalCommandParser(content, this);
		if (!parser.isValid()) {
			this.addLines(
				new TerminalLine("That's not right... try 'help'?").setDelayAfter(0),
			).then(() => {
				this.openInput();
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
			this.cmdPredictor.set(this.getCommandIdentifiers());
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
