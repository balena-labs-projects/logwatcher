import _ from 'lodash';
import { triggers } from './environment';
import { logEvent } from './logger';

// tslint:disable-next-line: no-var-requires
const Journalctl = require('@seydx/journalctl');

const filters = _.uniq(Object.keys(triggers));
new Journalctl({
	filters,
}).on('event', (event: any) => {
	for (const filter of filters) {
		if (event.MESSAGE.indexOf(filter) !== -1) {
			logEvent(parseInt(event.PRIORITY, 10), triggers[filter], event.MESSAGE);
		}
	}
});
