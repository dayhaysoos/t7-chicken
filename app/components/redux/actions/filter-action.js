import {
	ADD_ATTACK_FILTER,
	REMOVE_ATTACK_FILTER
} from './actionCreators';


export function addFilter(payload) {
	return {
		type: ADD_ATTACK_FILTER,
		payload
	}
}

export function removeFilter(payload) {
	return {
		type: REMOVE_ATTACK_FILTER,
		payload
	}
}
