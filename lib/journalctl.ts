import _ from 'lodash';
import childProcess = require('child_process');
import EventEmitter = require('events');
import * as JSONstream from 'JSONStream';
import type { JournalEvent } from './journalEvent';

const utf8decoder = new TextDecoder();

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
			JSONstream.parse(true).on('data', (event: JournalEvent) => {
				if (_.isArray(event.MESSAGE)) {
					const u8arr = new Uint8Array(event.MESSAGE);
					event.MESSAGE = utf8decoder.decode(u8arr);
				}
				this.emit('event', event);
			}),
		);
	}
}
