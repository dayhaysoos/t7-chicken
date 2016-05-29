export const TestTypes = {
	TEST_ACTION: 'TEST_ACTION'
}

export function setTest(test) {
	return { type: TEST_ACTION, test }
}