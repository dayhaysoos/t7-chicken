import {
  SET_SEARCH_FILTER,
  UPDATE_SEARCH_FILTER
} from '../actions/actionCreators';

const initialState = {
  searchFilter: ''
}

function searchFilter(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_SEARCH_FILTER':
    console.log('updateSearchFilter', action.text);
    return Object.assign({}, state, {
      searchFilter: action.text
    })
  }
  return state;
}

export default searchFilter;
