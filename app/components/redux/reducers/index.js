import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import frameData from './frame-data-reducer';

const rootReducer = combineReducers({
	frameData,
	routing: routerReducer });

export default rootReducer;