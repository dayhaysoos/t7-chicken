import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import characterData from './character-data-reducer';
import searchFilter from './search-filter-reducer';
import { attackFilters } from './filter-reducer';

const rootReducer = combineReducers({
	characterData,
	searchFilter,
	attackFilters,
	routing: routerReducer
});

export default rootReducer;
