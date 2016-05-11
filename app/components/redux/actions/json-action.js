export const GET_JSON = 'GET_JSON'
export const SET_FILTER = 'SET_FILTER'

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_UNSAFE: 'SHOW_UNSAFE',
	SHOW_PLUS_FRAME: 'SHOW_PLUS_FRAME',
	SHOW_TAILSPIN: 'SHOW_TAILSPIN',
	SHOW_NATURAL_STRING: 'SHOW_NATURAL_STRINGS',
	SHOW_HIGH_CRUSH: 'SHOW_HIGH_CRUSH',
	SHOW_LOW_CRUSH: 'SHOW_LOW_CRUSH',
	SHOW_WALL_SPLAT: 'SHOW_WALL_SPLAT'
}


export function getJson(data) {
	return { type: GET_JSON, data }
}


export function setFilter(filter) {
	return { type: SET_FILTER, filter }
}