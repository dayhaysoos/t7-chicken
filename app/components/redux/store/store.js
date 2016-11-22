import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from '../reducers/index.js';

import frameDataJSON from '../../../json/test.js';


//create object for default data
export const defaultState = {
	frameData: framaDataJSON
};

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;