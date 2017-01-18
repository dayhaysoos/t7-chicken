import {
  UPDATE_SEARCH_FILTER
} from './actionCreators';

export function updateSearchFilter(text) {
	return {
		type: UPDATE_SEARCH_FILTER,
		text
	}
}
