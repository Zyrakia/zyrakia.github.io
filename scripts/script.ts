const terminal = new Terminal();

terminal.render(document.querySelector('body'));

async function displayDefault() {
	await terminal.addLine('solo', 'Established connection with remote server');
	await terminal.addLine('solo', 'Awaiting user input...');

	await terminal.addLine('raw', '', undefined, {
		delayAfter: 2000,
		blinkAfter: true,
		removeBlinkAfterDelay: true,
	});

	await terminal.addLine('raw', '', undefined, {
		delayAfter: 2000,
		blinkAfter: true,
		removeBlinkAfterDelay: true,
	});

	await terminal.addLine('solo', 'Error occured');
	await terminal.addLine('solo', 'Forcing remote connection to terminate... Goodbye world!');
}

displayDefault();
