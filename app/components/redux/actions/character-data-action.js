import {
	CHARDATA_FETCHING,
  CHARDATA_FETCH_SUCCESS,
	CHARDATA_FETCH_ERROR
} from './actionCreators';

import frameData from '../../../json/test.js';

const CHARDATA_API = "";

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
  console.log("call fetch", character);
  return dispatch => {
    // set loading state;
    dispatch( fetchingCharacterData() );
    // replace with api call
    return new Promise( (resolve, reject) => resolve(getDataByCharacter(character)) )
      .then( (response) => dispatch( dataFetchSuccess(response, character) ) )
      .catch( (err, character) => dispatch( dataFetchError(err, character) ) );
  };
}

/*
 *  Remove when api is set
 */
function getDataByCharacter(character) {
  return frameData[character];
}