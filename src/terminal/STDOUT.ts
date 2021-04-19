import {Element} from '../utils/Element';
import {Typewriter} from '../utils/Typewriter';
import {Line} from './Line';

export class STDOUT extends Element<HTMLDivElement> {
	private lines: Line[];

	public constructor(private parentElement: HTMLElement) {
		super();
	}

	protected onRequestElement(): HTMLDivElement {
		return document.createElement('div');
	}

	public async write(line: Line): Promise<void> {
		const options = line.getAnimationSettings();

		line.render(this.internalElement);

		const typewriter = new Typewriter(line.getElement(), {
			typeDelay: options.speed,
			human: options.humanSpeed,
			renderAfter: options.renderAfter,
		});

		return new Promise((resolve) => {
			let content: string;
			if (line.getContent()) content = line.getContent();
			else {
				content = '&nbsp;';
			}

			typewriter.pauseFor(options.delayBefore);

			if (options.animate) typewriter.typeHTML(content);
			else typewriter.pasteHTML(content);

			typewriter
				.pauseFor(options.delayAfter)
				.execute(() => resolve())
				.start();
		});
	}

	public clear() {
		this.internalElement.innerHTML = '';
		this.lines = [];
	}

	public getLines() {
		return this.lines;
	}
}
