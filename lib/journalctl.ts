import childProcess = require('child_process');
import EventEmitter = require('events');
import * as JSONstream from 'JSONStream';
import { JournalEvent } from './journalEvent';
// import { charCodeToString } from './utils';

export class Journalctl extends EventEmitter {
	private journalctl;
	constructor(opts) {
		super();

		// Decode opts
		const args = ['-f', '-a', '-o', 'json'];
		if (opts === undefined) {
			opts = {};
		}
		if (opts.all) {
			args.push('-a');
		}
		if (opts.lines) {
			args.push('-n', opts.lines);
		}
		if (opts.since) {
			args.push('-S', opts.since);
		}
		if (opts.identifier) {
			args.push('-t', opts.identifier);
		}
		if (opts.unit) {
			args.push('-u', opts.unit);
		}
		if (opts.filter) {
			if (!(opts.filter instanceof Array)) {
				opts.filter = [opts.filter];
			}
			opts.filter.forEach((f) => args.push(f));
		}

		// Start journalctl
		this.journalctl = childProcess.spawn('journalctl', args, { stdio: 'pipe' });

		this.journalctl.stdout.pipe(
			JSONstream.parse(true).on('data', (chunk: JournalEvent) => {
				// Disabling it because it generates:
				// "MESSAGE":"\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u0000.....
				// chunk.MESSAGE = charCodeToString(chunk.MESSAGE);
				this.emit('event', chunk);
			}),
		);
	}
}
