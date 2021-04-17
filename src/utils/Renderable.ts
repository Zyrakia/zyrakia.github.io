export type RenderMethod = 'append' | 'prepend';

export abstract class Renderable<ElementType extends HTMLElement> {
	protected parentElement: ElementType;

	constructor() {
		this.parentElement = this.generateParentElement();
	}

	protected abstract generateParentElement(): ElementType;

	public render(to: HTMLElement, renderMethod: RenderMethod = 'append') {
		if (renderMethod === 'append') to.appendChild(this.parentElement);
		else to.prepend(this.parentElement);
	}

	public getParentElement() {
		return this.parentElement;
	}
}
