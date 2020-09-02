const fileInput = document.getElementById('test');

const terminal = document.querySelector('.terminal');

fileInput.addEventListener('change', () => {
	const reader = new FileReader();

	reader.addEventListener('load', (e) => {
		const writer = new Writer(e.target.result);

		const elems = writer.convertToDOM();
		elems.forEach((elem) => {
			terminal.appendChild(elem);
		});
	});

	reader.readAsText(fileInput.files[0]);
});
