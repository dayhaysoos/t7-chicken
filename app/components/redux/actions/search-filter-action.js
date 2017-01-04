import {
  SET_SEARCH_FILTER,
  UPDATE_SEARCH_FILTER
} from './actionCreators';

export function setSearchFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function updateSearchFilter(text) {
	return {
		type: UPDATE_SEARCH_FILTER,
		text
	}
}
