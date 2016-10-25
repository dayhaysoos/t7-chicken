// reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function frameData(state =[], action) {
	console.log(state, action);
	return state;
}

export default frameData;