import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {

	render() {
		return (
		<div className="login-container row">
			<div className='small-8 columns centered'>
				<form className="form-signin">
					<h2 className="form-signin-heading">Please sign in</h2>
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""></input>
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>

		        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		      	</form>
		      	<h2>Or</h2>
		      	<Link to="/register">Register</Link>
			</div>
	  </div>
		)
	}
}
