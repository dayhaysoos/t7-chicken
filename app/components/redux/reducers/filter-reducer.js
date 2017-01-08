
import {
	TOGGLE_HIGH_CRUSH_ATTACKS
} from '../actions/actionCreators';

const initialState = {
	activeFilters: 0,
	hitLevel: { 
		active: false,
		levels: []
	},
	onBlock: {
		active: false,
		greaterThan: false,
		value: 0
	}
}

function filter(state = initialState, action) {

	switch(action.type) {
		case TOGGLE_HIGH_CRUSH_ATTACKS:
            return updateHighCrush(state, action);

        default:
           return state; 
	}
}

function updateHighCrush(state, action) {

	    const HIGH_CRUSH = 'TC';

	    let newHitLevelActive = false;
	    let newActiveLevels = state.hitLevel.levels;

	    console.log('Setting high crush filter to ' + action.filter);

		//Activate High Crush Filter
		if(action.filter) {
			newHitLevelActive = true;
			state.activeFilters++;

			if(!newActiveLevels.includes(HIGH_CRUSH)) {
				newActiveLevels.push(HIGH_CRUSH);
			}

			console.log('newActiveLevels: ' + newActiveLevels);
			console.log('newHitLevelActive: ' + newHitLevelActive);
		}

		//Deactivate High Crush Filter
		else if(!action.filter) {
			let index = newActiveLevels.indexOf(HIGH_CRUSH);

			//TC not already active
			if(index == -1)
				return newState;

			newActiveLevels.splice(index, 1);

			//No more hitLevel filters
			if(newActiveLevels.length == 0) {
				newHitLevelActive = false;
				state.activeFilters--;
			}
		}

		//Updated state
		let newState = Object.assign({}, state, {
			hitLevel: {
				active: newHitLevelActive,
				levels: newActiveLevels
			}
		});

		return newState;
}
export default filter;
