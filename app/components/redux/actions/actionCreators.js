//create user
export function createUser(username, email, password) {
  return {
    type: 'CREATE_USER',
    username,
    email,
    password
  };
}

//user login
export function login(username, password) {
	return {
		type: 'LOGIN_USER',
		username,
		password
	};
}

