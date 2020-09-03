interface TypewriterSettings {
	speed?: number;
	random?: boolean;
	delayAfter?: number;
	blinkAfter?: boolean;
	removeBlinkAfterDelay?: boolean;
}

class Typewriter {
	public static readonly DEFAULT_SETTINGS: TypewriterSettings = {
		speed: 100,
		random: true,
		delayAfter: 500,
		blinkAfter: false,
		removeBlinkAfterDelay: false,
	};

	private elementToPopulate: HTMLElement;
	private content: string;

	private currentIndex = 0;

	constructor(elementToPopulate: HTMLElement, content: string) {
		this.elementToPopulate = elementToPopulate;
		this.content = content;
	}

	public go(settings: TypewriterSettings) {
		if (!settings) settings = Typewriter.DEFAULT_SETTINGS;

		return new Promise((resolve) => {
			const type = () => {
				if (this.currentIndex < this.content.length) {
					this.elementToPopulate.innerText += this.content.charAt(this.currentIndex);
					this.currentIndex++;

					let speed: number;

					if (!settings.speed) settings.speed = Typewriter.DEFAULT_SETTINGS.speed;
					if (!settings.random) speed = settings.speed;
					else speed = Math.round(Math.random() * settings.speed);

					setTimeout(() => {
						type();
					}, speed);
				} else {
					setTimeout(() => {
						this.elementToPopulate.classList.remove('caret');
						if (settings.blinkAfter) this.elementToPopulate.classList.add('blinkcaret');
					}, 50);

					if (!settings.delayAfter) resolve();
					else {
						setTimeout(() => {
							if (settings.removeBlinkAfterDelay)
								this.elementToPopulate.classList.remove('blinkcaret');

							resolve();
						}, settings.delayAfter);
					}
				}
			};

			this.elementToPopulate.style.display = 'block';
			this.elementToPopulate.classList.add('caret');

			type();
		});
	}
}
