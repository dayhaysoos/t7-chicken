import React from 'react';



export default class Logout extends React.Component {

	logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
	}

	render() {
		return (
			<a href="#" onClick={this.logout}>Log out</a>
			);
	}
}

