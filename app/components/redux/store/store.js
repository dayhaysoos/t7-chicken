import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from '../reducers/index.js';

import frameDataJSON from '../../../json/test.js';

const loggerMiddleware = createLogger();

//create object for default data
export const defaultState = {
	frameData: frameDataJSON
};

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
