import Journalctl from '@seydx/journalctl';
import _ from 'lodash';
import { triggers } from './environment';

const filters = _.uniq(Object.keys(triggers));

new Journalctl({
	filters,
}).on('event', (event: any) => {
	for (const filter of filters) {
		if (event.MESSAGE.indexOf(filter) !== -1) {
			const fingerprint = triggers[filter];
			const date = new Date(
				parseInt(event.__REALTIME_TIMESTAMP.substring(0, 13), 10),
			).toISOString();
			console.log(date, fingerprint, event.MESSAGE);
		}
	}
});
