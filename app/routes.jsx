import React from 'react';
import App from './components/App.jsx';
import {Router, Route, hashHistory} from 'react-router';


export default function() {
	return (
		<Router>
			<Route path="/" component={App}></Route>
		</Router>
		);
}
