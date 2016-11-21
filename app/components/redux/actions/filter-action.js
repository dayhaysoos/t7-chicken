import {
	SET_VISIBILITY_FILTER
} from './actionCreators';

export function selectCharacter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}