import {
	SET_VISIBILITY_FILTER,
	UPDATE_VISIBILITY_FILTER
} from './actionCreators';

export function updateVisbilityFilter(filter) {
	return {
		type: UPDATE_VISIBILITY_FILTER,
		filter
	}
}
