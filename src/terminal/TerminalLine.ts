export class TerminalLine {
	public static readonly ANIMATION_SETTINGS_DEFAULTS: LineAnimationSettings = {
		animateTyping: true,
		randomAnimation: true,
		animationSpeed: 20,
		delayAfter: 250,
		blinkAfter: false,
		removeBlinkAfterDelay: true,
		delayBefore: 0,
		blinkBefore: false,
	};

	private content: string;
	private type: LineType;
	private indentLevel: number;
	private animationSettings: LineAnimationSettings;

	private lineElement: HTMLDivElement;

	constructor(content: string = '', type: LineType = LineType.SOLO, indentLevel: number = 0) {
		this.content = content;
		this.type = type;
		this.indentLevel = indentLevel;
		this.animationSettings = {...TerminalLine.ANIMATION_SETTINGS_DEFAULTS};
		this.genElement();
	}

	private genElement() {
		const element = document.createElement('div');

		element.classList.add('line');
		if (!this.content) this.content = '&nbsp;';

		this.lineElement = element;
		this.applyAttributes();
	}

	private applyAttributes() {
		this.lineElement.setAttribute('data-linetype', this.type.toLowerCase());
		this.lineElement.setAttribute('data-indentlevel', `${this.indentLevel}`);
	}

	public getContent() {
		return this.content;
	}

	public getType() {
		return this.type;
	}

	public getIndentLevel() {
		return this.indentLevel;
	}

	public getAnimationSettings() {
		return this.animationSettings;
	}

	public getElement() {
		return this.lineElement;
	}

	public setContent(content: string) {
		this.content = content;
		return this;
	}

	public setType(type: LineType) {
		this.type = type;
		this.applyAttributes();
		return this;
	}

	public setIndentLevel(indentLevel: number) {
		this.indentLevel = indentLevel;
		this.applyAttributes();
		return this;
	}

	//Animation settings setters
	public setAnimationSettings(settings: LineAnimationSettings) {
		this.animationSettings = settings;
		return this;
	}

	public setAnimateTyping(animateTyping: boolean) {
		this.animationSettings.animateTyping = animateTyping;
		return this;
	}

	public setRandomAnimation(randomAnimation: boolean) {
		this.animationSettings.randomAnimation = randomAnimation;
		return this;
	}

	public setAnimationSpeed(animationSpeed: number) {
		this.animationSettings.animationSpeed = animationSpeed;
		return this;
	}

	public setDelayAfter(delayAfter: number) {
		this.animationSettings.delayAfter = delayAfter;
		return this;
	}

	public setBlinkAfter(blinkAfter: boolean) {
		this.animationSettings.blinkAfter = blinkAfter;
		return this;
	}

	public setRemoveBlinkAfterDelay(removeBlinkAfterDelay: boolean) {
		this.animationSettings.removeBlinkAfterDelay = removeBlinkAfterDelay;
		return this;
	}

	public setDelayBefore(delayBefore: number) {
		this.animationSettings.delayBefore = delayBefore;
		return this;
	}

	public setBlinkBefore(blinkBefore: boolean) {
		this.animationSettings.blinkBefore = blinkBefore;
		return this;
	}
}

export interface LineAnimationSettings {
	animateTyping: boolean;
	randomAnimation: boolean;
	animationSpeed: number;
	delayAfter: number;
	blinkAfter: boolean;
	removeBlinkAfterDelay: boolean;
	delayBefore: number;
	blinkBefore: boolean;
}

export enum LineType {
	RAW = 'RAW',
	SOLO = 'SOLO',
	START = 'START',
	END = 'END',
	INDENT = 'INDENT',
}

export const lineTypeSymbols: Map<LineType, string> = new Map();
lineTypeSymbols.set(LineType.RAW, '');
lineTypeSymbols.set(LineType.SOLO, '$');
lineTypeSymbols.set(LineType.START, lineTypeSymbols.get(LineType.SOLO)!);
lineTypeSymbols.set(LineType.END, lineTypeSymbols.get(LineType.SOLO)!);
lineTypeSymbols.set(LineType.INDENT, '%');
