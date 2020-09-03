class Terminal extends Renderable {
	constructor() {
		super();
		this.generateParentElement();
	}

	public async addLine(
		type: TerminalLineType,
		content: string,
		indentLevel: number = 0,
		typewriterSettings?: TypewriterSettings
	) {
		const lineElement = document.createElement('div');
		lineElement.classList.add('line');
		lineElement.style.display = 'none';
		lineElement.innerText = content;
		lineElement.setAttribute('data-lineType', type.toLowerCase());
		lineElement.setAttribute('data-indentLevel', `${indentLevel}`);

		if (type === 'raw' && !content) lineElement.innerHTML = '&nbsp;';

		this.parentElement.appendChild(lineElement);

		const contentToTypeOut = lineElement.innerText;
		lineElement.innerText = '';

		const typewriter = new Typewriter(lineElement, contentToTypeOut);
		await typewriter.go(typewriterSettings);
	}

	public generateParentElement() {
		const generatedParentElement = document.createElement('section');
		generatedParentElement.classList.add('terminal');
		this.parentElement = generatedParentElement;
	}

	public render(to: HTMLElement, renderMethod: RenderMethod = 'append') {
		if (renderMethod === 'append') to.appendChild(this.parentElement);
		else to.prepend(this.parentElement);
	}
}
