import React from 'react';

export default class Register extends React.Component {
	render() {
		return (
			<div className="register-container">
				<form class-name="register-form" method="POST">

					<label className="form-label" htmlFor="register-email"></label>
					<input className="form-input" name="register-email" type="text" placeholder="email"></input>

					<label className="form-label" htmlFor="register-username"></label>
					<input className="form-input" name="register-username" type="text" placeholder="username"></input>

					<label className="form-label" htmlFor="register-password"></label>
					<input className="form-input" name="register-password" type="text" placeholder="password"></input>

					<label className="form-label" htmlFor="confirm-password"></label>
					<input className="form-input" name="confirm-password" type="text" placeholder="confirm password"></input>

					<button>Create Account</button>
				</form>
			</div>
			);
	}
}