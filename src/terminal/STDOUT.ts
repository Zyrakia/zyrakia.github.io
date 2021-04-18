import {Element} from '../utils/Element';
import {Line} from './Line';
import Typewriter from 'typewriter-effect/dist/core';
import {Options, TypewriterClass} from 'typewriter-effect';

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
		if (!options.animate) {
			line.getElement().innerHTML = line.getContent();
			return;
		}

		const typewriter = new Typewriter(line.getElement(), {
			delay: options.speed,
			cursor: '',
		} as Options) as TypewriterClass;

		return new Promise((resolve) => {
			typewriter
				.pauseFor(options.delayBefore)
				.typeString(line.getContent())
				.pauseFor(options.delayAfter)
				.callFunction(() => resolve())
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
