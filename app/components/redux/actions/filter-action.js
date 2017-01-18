import {
	TOGGLE_ATTACK_FILTER
} from './actionCreators';

export function toggleFilter(payload) {
	return {
		type: TOGGLE_ATTACK_FILTER,
		payload
	}
}
