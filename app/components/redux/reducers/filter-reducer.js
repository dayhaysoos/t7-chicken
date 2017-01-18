
import {
	TOGGLE_ATTACK_FILTER

} from '../actions/actionCreators';


export function attackFilters (state = [], action) {
  let { type, payload } = action
  switch (type) {
    case 'TOGGLE_ATTACK_FILTER':
		function actionFinder(a) {
			return a == payload
		}
      // if the function exists in the store, remove it, otherwise add it:
      return state.find(actionFinder) ? state.filter(f => f !== payload) : state.concat(payload)
  }
  return state
}
