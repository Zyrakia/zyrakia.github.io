const terminal = document.querySelector('.terminal');

const def = `
SOLO||Established connection with remote server
SOLO||Awaiting user input...
RAW||
RAW||
SOLO||Error occured
SOLO||Forcing remote connection to terminate... Goodbye world!
`;

function domify(lines: Array<string>) {
	const lineElements: Array<HTMLDivElement> = [];

	lines.forEach((line) => {
		const split = line.split('||');

		const type = split.splice(0, 1)[0].toLowerCase();
		const content = split.join('');

		const elem = document.createElement('div');

		switch (type) {
			case 'solo':
				elem.classList.add('line');
				elem.setAttribute('data-type', type);

				elem.innerText = content;
				break;

			case 'start':
				elem.classList.add('line', 'start');
				elem.setAttribute('data-type', type);

				elem.innerText = content;
				break;

			case 'end':
				elem.classList.add('line', 'end');
				elem.setAttribute('data-type', type);

				elem.innerText = content;
				break;

			case 'raw':
				elem.classList.add('line', 'raw');
				elem.setAttribute('data-type', type);

				if (!content) elem.innerHTML = '&nbsp;';
				else elem.innerText = content;

				break;

			default:
				const typeSplit = type.split('indent');
				if (typeSplit.length !== 2) return;

				elem.classList.add('line');
				elem.setAttribute('data-type', 'indent');
				elem.setAttribute('data-level', typeSplit[1]);

				elem.innerText = content;
				break;
		}

		lineElements.push(elem);
	});

	return lineElements;
}

function type(e: Array<HTMLDivElement>) {
	let i = 0;
	const speed = 150;

	const currentE = e[0];

	const text = currentE.innerText;
	currentE.innerText = '';

	currentE.style.display = 'block';

	setTimeout(() => {
		currentE.classList.add('caret');
	}, 50);
	typeWriter();

	function typeWriter() {
		if (i < text.length) {
			currentE.innerHTML += text.charAt(i);
			i++;
			setTimeout(typeWriter, Math.random() * speed);
		} else {
			e.splice(0, 1);
			setTimeout(() => {
				currentE.classList.remove('caret');
			}, 50);
			if (e.length) type(e);
		}
	}
}

const elems = domify(def.split('\n'));

elems.forEach((elem) => {
	elem.style.display = 'none';
	terminal.appendChild(elem);
});

type(elems);
