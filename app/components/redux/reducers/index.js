import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import frameData from './frameData';
import characters from './characters';

const rootReducer = combineReducers({frameData, characters, routing: routerReducer });

export default rootReducer;