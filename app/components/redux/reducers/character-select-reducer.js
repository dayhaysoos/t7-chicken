import  { CHARACTER_SELECT } from './../actions/actionCreators';

const initialState = {
	selected: 'alisa'
}

function selectedCharacter(state = initialState, action) {
	if (action.type === CHARACTER_SELECT) {
		return Object.assign({}, state, {
			selected: action.character
		})
	} else {
		return state
	}
}


export default selectedCharacter;