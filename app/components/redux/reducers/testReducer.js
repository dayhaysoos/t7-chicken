import ActionCreators from '../actions/actionCreators';

const initialState = {
 test: false
}

const testActionStart = state => ({
  ...state,
  test: true
})

const testReducer = (state = initialState, action) => ({
  switch (action.type) {
    case ActionCreators.TestTypes.TEST_ACTION: return TEST_ACTION_START(state)
    default: return state
  }
})

export function TestAction(state, action) {
	switch (action.type) {
		console.log('Testing redux');
		case ActionCreators.TestTypes.TEST_ACTION:
		return {
			TestAction: state.TestAction + action.TestAction
		};
		default: return state
	}
}