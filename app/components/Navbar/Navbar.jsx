import React from 'react';
import { Link } from 'react-router';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import { loginUser } from '../redux/actions/auth0-login-actions';
import { logoutUser } from '../redux/actions/auth0-logout-actions';



export default class Navbar extends React.Component {
	render(){
		const { isAuthenticated, errorMessage } = this.props;
		return(
			<nav className="navbar">
				<div className="row">
					<div className='small-6 columns'>
						<ul className="menu">
							<li><a href="#">TC</a></li>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/frame-data">Frame Data</Link></li>
						</ul>
					</div>
					<div className='small-5 columns'>
						<ul className="menu align-right">
						{
							!isAuthenticated &&
							<Login
								errorMessage={errorMessage}
								onLoginClick={ creds => loginUser(creds) }
							/>
						}
						{
							isAuthenticated &&
							<Logout onLogoutClick={() => logoutUser()} />
						}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
