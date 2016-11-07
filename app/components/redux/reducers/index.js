import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import frameData from './frame-data-reducer';
import characterSelect from './character-select-reducer';
import auth from './auth0-reducer';

const rootReducer = combineReducers({
	frameData,
	characterSelect,
	auth,
	routing: routerReducer });

export default rootReducer;