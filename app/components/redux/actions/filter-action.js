import {
	SET_VISIBILITY_FILTER,
	UPDATE_VISBILITY_FILTER
} from './actionCreators';

export function selectCharacter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function updateFilter(filter) {
	return {
		type: UPDATE_VISBILITY_FILTER,
		filter
	}
}
