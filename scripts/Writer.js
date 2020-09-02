class Writer {
	constructor(fileText) {
		this.fileText = fileText;
	}

	convertToDOM() {
		const lines = this.fileText.split('\n');
		const lineElements = [];

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

					lineElements.push(elem);
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
					lineElements.push(elem);
					break;

				default:
					var newElem = document.createElement('div');
					const indentAmount = +type.split('indent')[1];

					newElem.classList.add('line', type);
					newElem.setAttribute('data-type', type);

					newElem.innerText = content;

					if (indentAmount > 0) {
					} else {
						elem.appendChild(newElem);
					}

					break;
			}
		});

		return lineElements;
	}

	display() {
		console.log(this.fileText);
	}
}
