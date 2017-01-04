function filter(state = '', action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state

			case 'UPDATE_VISIBILITY_FILTER':
			console.log('updateVisibilityFilter', action.filter);
			return Object.assign({}, state, {
				filter: action.filter
			})
	}
}

export default filter;
