function test(state =[], action) {
	switch (action.type) {
		case 'TEST':
			return action.test
		default:
		return state
	}
}

export default test;
