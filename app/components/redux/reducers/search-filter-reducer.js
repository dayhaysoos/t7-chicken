import {
  SET_SEARCH_FILTER,
  UPDATE_SEARCH_FILTER
} from '../actions/actionCreators';

const initialState = {
  searchFilter: ''
}

function searchFilter(state = initialState, action) {
  switch (action.type) {
  case 'SET_SEARCH_FILTER':
    return action.filter
  default:
    return state

    case 'UPDATE_SEARCH_FILTER':
    console.log('updateSearchFilter', action.text);
    return Object.assign({}, state, {
      searchFilter: action.text
    })
  }
}

export default searchFilter;
