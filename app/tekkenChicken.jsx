import React from 'react';
import { render } from 'react-dom';
import styles from './components/App.scss';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import FrameData from './components/FrameData/FrameData.jsx';
import Register from './components/Register/Register.jsx';

//Router dependencies
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './components/redux/store/store.js';


const router = (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}>
						<Route path="/login" component={Login}></Route>
						<Route path="/frame-data" component={FrameData}></Route>
						<Route path="/register" component={Register}></Route>
					</IndexRoute>
				</Route>
			</Router>
		</Provider>
	)

render(router, document.getElementById('app'));