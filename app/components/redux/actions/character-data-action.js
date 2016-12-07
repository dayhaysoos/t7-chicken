import {
	CHARDATA_FETCHING,
  CHARDATA_FETCH_SUCCESS,
	CHARDATA_FETCH_ERROR
} from './actionCreators';

//Keeping this here just in case
//import frameData from '../../../json/test.js';


const CHARDATA_API = "http://chicken.seattletekken.com/api.php";


function dataFetchSuccess(response, character) {
  console.log("success", response);
	return {
    type: CHARDATA_FETCH_SUCCESS,
    payload: response,
    character: character
  }
}

function dataFetchError(err, character) {
  return {
    type: CHARDATA_FETCH_ERROR,
    error: err,
    character: character
  }
}

function fetchingCharacterData() {
  return {
    type: CHARDATA_FETCHING
  }
}

/*
 * FETCHES DATA FOR SPECIFIC CHARACTER
 */
export function fetchCharacterData(character) {
  console.log('call fetch', character);
  return dispatch => {
    // set loading state;
    dispatch( fetchingCharacterData() );
    // api call
    fetch(CHARDATA_API)
    .then((response) => {
      console.log(response);
      return response.json()
    }).then((response) => {
      dispatch( dataFetchSuccess(response[character], character) )
    }).catch(function(err) {
      console.log('this got rekt', err)
    })
  };
}
