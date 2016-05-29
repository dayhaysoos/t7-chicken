// reducer takes in two things: 
// 1.Action (info about what happened)
// 2. Copy of Current State

function characters(state = [], action) {
	console.log(state, action);
	return state;
}

export default characters;