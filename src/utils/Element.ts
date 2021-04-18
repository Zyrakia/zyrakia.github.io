export enum RenderMethod {
	PREPEND,
	APPEND,
}

export abstract class Element<Element extends HTMLElement> {
	protected internalElement: Element;

	protected constructor() {
		this.internalElement = this.onRequestElement();
	}

	public render(to: HTMLElement, method = RenderMethod.APPEND) {
		if (!this.shouldElementRender()) return;
		this.internalElement = this.onRequestElement();
		if (method === RenderMethod.APPEND) to.append(this.internalElement);
		else to.prepend(this.internalElement);
		this.onElementRender();
	}

	public remove() {
		this.internalElement.remove();
	}

	protected abstract onRequestElement(): Element;

	protected onElementRender() {}

	protected shouldElementRender() {
		return true;
	}

	public getElement() {
		return this.internalElement;
	}
}
