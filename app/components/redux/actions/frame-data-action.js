import {
	FRAMEDATA_FETCH
} from './actionCreators';

export function frameDataFetch(data) {
	return {
		type: FRAMEDATA_FETCH,
		data
	}
}