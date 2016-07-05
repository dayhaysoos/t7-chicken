import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from '../reducers/index.js';


//create object for default data

function requireAll(requireContext) {
			return requireContext.keys().map(requireContext);
		}

		let data = requireAll(require.context('../../data/t7', false, /\.json$/));

export const defaultState = {
	data
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;