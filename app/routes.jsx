import React from 'react';
import App from './components/App.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Table from './components/Table/Table.jsx';
import Register from './components/Register/Register.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


export default function() {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/login" component={Login}></Route>
				<Route path="/table" component={Table}></Route>
				<Route path="/register" component={Register}></Route>
			</Route>
		</Router>
		);
}
