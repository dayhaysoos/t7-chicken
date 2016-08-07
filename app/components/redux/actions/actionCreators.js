//action types - This is just for reference
/*export const UserTypes = {
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_FAIL: 'CREATE_USER_FAIL'
}/*/


//create user
export const createUser = (username, email, password) => dispatch => {
  dispatch({ type: 'CREATE_USER' })
  fetch('http://127.0.0.1:5984/_users/', {
    method: 'POST',
    body: JSON.stringify({ email, username, password })
  })
  .then(res => dispatch({ type: 'CREATE_USER_SUCCESS', payload: { user: res.user}} ))
  .catch(err => dispatch({type: 'CREATE_USER_FAIL', payload: { error: err.message}} )) 
};