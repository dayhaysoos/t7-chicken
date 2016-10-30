import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import frameData from './frame-data-reducer';
import characterSelect from './character-select-reducer';

const rootReducer = combineReducers({
	frameData,
	characterSelect,
	routing: routerReducer });

export default rootReducer;