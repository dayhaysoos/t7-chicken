import {
	FRAMEDATA_FETCH,
	FRAMEDATA_FETCH_SUCCESS
} from './actionCreators';

import fengJSON from '../../json/test.json';



function dataFetchSuccess(response) {
	return {
    type: FRAMEDATA_FETCH_SUCCESS,
    payload: response
  }
}

function dataFetchError() {

}

export function frameDataFetch(data) {
	return {
		type: FRAMEDATA_FETCH,
		data
	}
}

export function fetchList() {
  return fengJSON()
    .then(dataFetchSuccess)
    .catch(dataFetchError);
}
