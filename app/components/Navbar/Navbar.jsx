import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
	render(){
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
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/register">Register</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
