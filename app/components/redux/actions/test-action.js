import {
	TEST
} from './actionCreators';

export function test(test) {
	return {
		type: TEST,
		test
	}
}