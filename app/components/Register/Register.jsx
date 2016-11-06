import React from 'react';

export default class Register extends React.Component {
	render() {
		return (
			<div className="register-container row">
				<div className='small-8 columns centered'>
					<form className="form-signin" method="POST">
						<h2 className="form-signin-header text-center">Register</h2>
						<label className="form-label" htmlFor="register-email"></label>
						<input className="form-input form-control" name="register-email" type="text" placeholder="email" required=""></input>

						<label className="form-label" htmlFor="register-username"></label>
						<input className="form-input form-control" name="register-username" type="text" placeholder="username" required=""></input>

						<label className="form-label" htmlFor="register-password"></label>
						<input className="form-input form-control" name="register-password" type="text" placeholder="password" required=""></input>

						<label className="form-label" htmlFor="confirm-password"></label>
						<input className="form-input form-control" name="confirm-password" type="text" placeholder="confirm password" required=""></input>

						<button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
					</form>
				</div>
			</div>
			);
	}
}
