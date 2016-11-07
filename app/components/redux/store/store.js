import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

//import root reducer
import rootReducer from '../reducers/index.js';

import frameData from '../../../json/test.js';

//create object for default data
export const defaultState = {
	frameData
};

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;