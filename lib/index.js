const Journalctl = require('@seydx/journalctl');

const journalctl = new Journalctl({});
journalctl.on('event', (event) => {
	console.log(event);
});
