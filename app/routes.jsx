import React from 'react';
import App from './components/App.jsx';
import Login from './components/Login/Login.jsx';
import Table from './components/Table/Table.jsx';
import Register from './components/Register/Register.jsx';
import {Router, Route, hashHistory} from 'react-router';


export default function() {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/table" component={Table}></Route>
			<Route path="/register" component={Register}></Route>
		</Router>
		);
}
