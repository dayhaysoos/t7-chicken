import {
	SET_VISIBILITY_FILTER,
	UPDATE_VISIBILITY_FILTER,
	TOGGLE_HIGH_CRUSH_ATTACKS
} from './actionCreators';

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function updateVisbilityFilter(filter) {
	return {
		type: UPDATE_VISIBILITY_FILTER,
		filter
	}
}

export function toggleHighCrush(filter) {
	return {
		type: TOGGLE_HIGH_CRUSH_ATTACKS,
		filter
	}
}
