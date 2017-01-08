import {
	TOGGLE_HIGH_CRUSH_ATTACKS
} from './actionCreators';


export function toggleHighCrush(filter) {
	return {
		type: TOGGLE_HIGH_CRUSH_ATTACKS,
		filter
	}
}
