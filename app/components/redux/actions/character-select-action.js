import {
	CHARACTER_SELECT
} from './actionCreators';

export function selectCharacter(character) {
	return {
		type: CHARACTER_SELECT,
		character
	}
}