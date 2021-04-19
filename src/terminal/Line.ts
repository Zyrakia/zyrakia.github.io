import {Element} from '../utils/Element';

export interface AnimationSettings {
	animate?: boolean;
	caretClass?: string;
	speed?: number;
	humanSpeed?: boolean;
	delayBefore?: number;
	delayAfter?: number;
	renderAfter?: boolean;
}

export enum LineType {
	RAW = 'RAW',
	SOLO = 'SOLO',
	START = 'START',
	END = 'END',
	INDENT = 'INDENT',
}

export class Line extends Element<HTMLDivElement> {
	public static readonly ANIMATION_SETTINGS: AnimationSettings = {
		animate: true,
		caretClass: 'caret',
		speed: 20,
		humanSpeed: true,
		delayBefore: 0,
		delayAfter: 250,
		renderAfter: true,
	};

	public constructor(
		private content: string = '',
		private type: LineType = LineType.SOLO,
		private indentLevel: number = 0,
		private animationSettings = Line.ANIMATION_SETTINGS,
	) {
		super();
	}

	protected onRequestElement(): HTMLDivElement {
		const element = document.createElement('div');

		element.classList.add('line');

		return element;
	}

	protected onElementRender() {
		this.applyAttributes();
	}

	public static of(content: string) {
		return new Line(content);
	}

	private applyAttributes() {
		this.internalElement.setAttribute('data-linetype', this.type.toLowerCase());
		this.internalElement.setAttribute('data-indentlevel', `${this.indentLevel}`);
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

	public setAnimationSettings(animationSettings: AnimationSettings) {
		this.animationSettings = Object.assign(
			{},
			Line.ANIMATION_SETTINGS,
			this.animationSettings,
			animationSettings,
		);
		return this;
	}
}

export const lineTypeSymbols: Map<LineType, string> = new Map();
lineTypeSymbols.set(LineType.RAW, '');
lineTypeSymbols.set(LineType.SOLO, '$');
lineTypeSymbols.set(LineType.START, lineTypeSymbols.get(LineType.SOLO)!);
lineTypeSymbols.set(LineType.END, lineTypeSymbols.get(LineType.SOLO)!);
lineTypeSymbols.set(LineType.INDENT, '%');
