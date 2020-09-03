type RenderMethod = 'append' | 'prepend';

type TerminalLineType = 'raw' | 'solo' | 'start' | 'end' | 'indent';

abstract class Renderable {
	protected parentElement: HTMLElement;
	public abstract render(to: HTMLElement, renderMethod: RenderMethod): void;
	public abstract generateParentElement(): void;

	public getParentElement() {
		return this.parentElement;
	}
}
