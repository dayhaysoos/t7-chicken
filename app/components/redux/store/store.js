import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from '../reducers/index.js';

import frameData from '../../../json/test.js';


//create object for default data
export const defaultState = {
	frameData
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;