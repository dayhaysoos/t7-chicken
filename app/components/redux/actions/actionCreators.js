//increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		comment
	}
}

//remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}

//get character data
export function getData(name) {
	return {
		type: 'GET_DATA',
		name
	}
}