import {Key} from 'ts-key-enum';
import {Element} from '../utils/Element';

export interface STDINListeners {
	onSubmit?: (content: string) => void | Promise<void>;
	onRequestSuggestion?: (content: string) => string;
}

export class STDIN extends Element<HTMLSpanElement> {
	public constructor(private listeners: STDINListeners) {
		super();
	}

	protected onRequestElement() {
		const element = document.createElement('span');

		element.classList.add('command_input');
		element.contentEditable = 'true';
		element.spellcheck = false;

		element.addEventListener('blur', this.lockFocus);
		element.addEventListener('keydown', (e) => this.handleKeyDown(e));
		element.addEventListener('keyup', () => this.onRequestSuggestion());

		return element;
	}

	protected onElementRender() {
		this.internalElement.focus();
		this.internalElement.scrollIntoView();
	}

	private lockFocus(this: HTMLSpanElement) {
		this.focus();
	}

	private handleKeyDown(e: KeyboardEvent) {
		if (e.key === Key.Enter) {
			e.preventDefault();
			this.onSubmit();
		} else if (e.key === Key.Tab) {
			e.preventDefault();
			this.onFillSuggestion();
		} else if (e.key === Key.ArrowUp) this.onBrowseHistory('up');
		else if (e.key === Key.ArrowDown) this.onBrowseHistory('down');
	}

	private onSubmit() {
		if (!this.listeners.onSubmit) return;
		const content = this.internalElement.innerText.trim();
		if (!content) return;
		this.internalElement.innerText = '';
		this.listeners.onSubmit(content);
	}

	private onRequestSuggestion() {
		if (!this.listeners.onRequestSuggestion) return;
	}

	private onFillSuggestion() {}

	private onBrowseHistory(direction: 'up' | 'down') {}
}
