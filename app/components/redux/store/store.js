import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from '../reducers/index.js';

const loggerMiddleware = createLogger();

//create object for default data

/**
  DATA DIAGRAM
  ------------

  {
    characterData: {
      frameData: (array)[],
      metaData: (object){},
      characterName: (string)""
    }
  }

**/



const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
