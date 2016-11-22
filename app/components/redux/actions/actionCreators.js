//Frame Data Types
export const FRAMEDATA_FETCH = 'FRAMEDATA_FETCH';
export const FRAMEDATA_FETCH_SUCCESS = 'FRAMEDATA_FETCH_SUCCESS';

//Character Selection
export const CHARACTER_SELECT = 'CHARACTER_SELECT';

export function characterSelect(character) {
	return {
		type: CHARACTER_SELECT,
		character
	}
}

//Filter
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const TEST = 'TEST';