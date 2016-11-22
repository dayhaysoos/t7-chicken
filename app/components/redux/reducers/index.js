import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import frameData from './frame-data-reducer';
import selectedCharacter from './character-select-reducer';
import filter from './filter-reducer';

const rootReducer = combineReducers({
	frameData,
	selectedCharacter,
	filter,
	routing: routerReducer 
});

export default rootReducer;