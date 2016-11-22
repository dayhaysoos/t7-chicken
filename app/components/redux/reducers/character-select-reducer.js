import  { CHARACTER_SELECT } from './../actions/actionCreators';

const initialState = {
	selected: 'alisa'
}

function selectedCharacterReducer(state = initialState, action) {
	if (action.type === CHARACTER_SELECT) {
		console.log(state);
		return Object.assign({}, state, {
			selected: action.character
		})
	} else {
		return state
	}
}


export default selectedCharacterReducer;