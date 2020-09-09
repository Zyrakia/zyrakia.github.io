class Typewriter {
	private line: TerminalLine;

	private content: string;
	private element: HTMLElement;
	private settings: LineAnimationSettings;

	private index = 0;

	private resolve: Function;

	constructor(line: TerminalLine) {
		this.line = line;
		this.content = this.line.getContent();
		this.element = this.line.getElement();
		this.settings = this.line.getAnimationSettings();
	}

	public start() {
		this.element.classList.add('caret');
		if (this.settings.blinkBefore) this.element.classList.add('blinkcaret');

		return new Promise<null>((resolve) => {
			this.resolve = resolve;

			after(this.settings.delayBefore, () => {
				this.element.classList.remove('blinkcaret');
				if (this.settings.animateTyping) this.recurseType();
				else this.stop();
			});
		});
	}

	private recurseType() {
		if (this.index < this.content.length) {
			const speed = this.settings.randomAnimation
				? Math.random() * this.settings.animationSpeed
				: this.settings.animationSpeed;

			after(speed, () => {
				this.element.innerText += this.content.charAt(this.index);
				this.element.scrollIntoView();
				this.index++;
				this.recurseType();
			});
		} else this.stop();
	}

	private stop() {
		this.element.classList.remove('caret');
		if (this.settings.blinkAfter) this.element.classList.add('blinkcaret');

		after(this.settings.delayAfter, () => {
			this.element.innerHTML = this.content;
			if (this.settings.removeBlinkAfterDelay) this.element.classList.remove('blinkcaret');
			this.resolve();
		});
	}
}
