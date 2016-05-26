import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
	render(){
		return(
		<nav className="navbar">
			<div className="container-fluid">
			<div className="navbar-header"></div>
				<div className="navbar-collapse collaspse">
					<ul className="nav navbar-nav">
						<li><a href="#">TC</a></li>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/table">Home</Link></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
					</ul> 
				</div>
			</div>
		</nav>

			);
	}
}