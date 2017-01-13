
import {
	ADD_ATTACK_FILTER,
	REMOVE_ATTACK_FILTER
} from '../actions/actionCreators';


export function attackFilters(state = [], action) {
	console.log(action);
  switch (action.type) {
		case 'ADD_ATTACK_FILTER':
    return state.concat(action.payload)

		case 'REMOVE_ATTACK_FILTER':
		return state.filter(f => f !== action.payload)
  }

	return state
}
