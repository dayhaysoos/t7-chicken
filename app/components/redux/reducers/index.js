import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import characterData from './character-data-reducer';
import filter from './filter-reducer';

const rootReducer = combineReducers({
	characterData,
	filter,
	routing: routerReducer 
});

export default rootReducer;