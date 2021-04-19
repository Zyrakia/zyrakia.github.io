import {Sender} from '../commander/command/Sender';
import {Commander} from '../commander/Commander';
import {Element, RenderMethod} from '../utils/Element';
import {Line, LineType} from './Line';
import {STDIN} from './STDIN';
import {STDOUT} from './STDOUT';

export class Terminal extends Element<HTMLDivElement> implements Sender {
	private stdin = new STDIN({
		onSubmit: (content) => this.onSTDIN(content),
	});

	private stdout = new STDOUT(this.internalElement);

	public constructor(private commander: Commander) {
		super();
	}

	protected onRequestElement() {
		const element = document.createElement('div');

		element.classList.add('terminal');
		element.tabIndex = 0;

		return element;
	}

	public onElementRender() {
		this.stdout.render(this.internalElement);
		this.stdin.render(this.internalElement);
		this.closeSTDIN();
		this.sayDefaults().then(() => {
			this.openSTDIN();
		});
	}

	public async sendMessage(line: Line) {
		await this.stdout.write(line);
	}

	private async onSTDIN(content: string) {
		this.closeSTDIN();
		await this.commander.execute(content, this);
		this.openSTDIN();
	}

	public openSTDIN() {
		this.stdin.render(this.internalElement);
	}

	private closeSTDIN() {
		this.stdin.remove();
	}

	public clear() {
		this.stdout.clear();
	}

	public async sayDefaults() {
		await this.sendMessage(
			Line.of(
				"(I know this isn't the most orthodox website, but hopefully it's acceptable, sorry!)",
			)
				.setAnimationSettings({animate: false})
				.setType(LineType.RAW),
		);
		await this.sendMessage(Line.of('').setType(LineType.RAW));
		await this.sendMessage(Line.of('Welcome to my portfolio.'));
		await this.sendMessage(
			Line.of(`Type 'help' and press ENTER to see a list of available commands.`),
		);
	}

	public export() {}

	public getCommander() {
		return this.commander;
	}
}
