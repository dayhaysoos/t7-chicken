
import {
	TOGGLE_HIGH_CRUSH_ATTACKS
} from '../actions/actionCreators';

const initialState = {
	highCrush: false,
	lowCrush: false,
	advantage: false,
	disadvantage: false,
}

function filter(state = initialState, action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state

			case 'TOGGLE_HIGH_CRUSH_ATTACKS':
			console.log('toggling high crush attacks', action.filter);
			return Object.assign({}, state, {
				highCrush: action.filter
			})
	}
}

export default filter;
