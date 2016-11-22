import {
	FRAMEDATA_FETCHING,
  FRAMEDATA_FETCH_SUCCESS,
	FRAMEDATA_FETCH_ERROR
} from './actionCreators';

import frameDataJSON from '../../json/test.json';

const FRAMEDATA_API = "";

function dataFetchSuccess(response, character) {
	return {
    type: FRAMEDATA_FETCH_SUCCESS,
    payload: response,
    character
  }
}

function dataFetchError(err, character) {
  return {
    type: FRAMEDATA_FETCH_ERROR,
    error: err,
    character
  }
}

function fetchingFrameData() {
  return {
    type: FRAMEDATA_FETCHING
  }
}

export function fetchFrameData(character) {
  //replace with api call
  return getFrameDataByCharacter(character)
    .then( (response) => dataFetchSuccess(response, character) )
    .catch( (err, character) => dataFetchError(err, character) );
}

/*
 *  Remove when api is set
 */
function getFrameDataByCharacter(character) {
  return frameDataJSON[character];
}