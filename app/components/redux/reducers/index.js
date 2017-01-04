import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import characterData from './character-data-reducer';
import filter from './filter-reducer';
import searchFilter from './search-filter-reducer';

const rootReducer = combineReducers({
	characterData,
	filter,
	searchFilter,
	routing: routerReducer
});

export default rootReducer;
