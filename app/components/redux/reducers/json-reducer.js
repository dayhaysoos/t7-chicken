import { Filters } from '../reducers/json-action.js';

const initialState = {
	filter: Filters.SHOW_ALL,
	data: []
}

export function tekkenChicken(state = initialState, action) {
	switch (action.type) {
		case GET_JSON:
		return Object.assign({}, state, {
			data: action.data
		})
		case SET_FILTER:
		return Object.assign({}, state, {
			filter: action.filter
		})
		default:
		return state
	}
}


