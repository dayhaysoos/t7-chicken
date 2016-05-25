import React from 'react';
import { Link } from 'react-router';


export default class Login extends React.Component {

	render() {
		return (
			<div className="login-container">
			<form method="POST">
				<label className="form-label" htmlFor="username"></label>
				<input className="form-input" id="username" name="username" type="text" placeholder="user"></input>
				<label className="form-label" htmlFor="password"></label>
				<input className="form-input" id="password" name="password" type="text" placeholder="password"></input>
			</form>
			<Link to={'/register'}>Register</Link>
			</div>
			)
	}
}