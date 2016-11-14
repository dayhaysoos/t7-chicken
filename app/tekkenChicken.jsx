import React from 'react';
import { render } from 'react-dom';

//import css 
import css from './components/App.scss';

// import components
import App from './components/App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import FrameData from './components/FrameData/FrameData';
import Register from './components/Register/Register';

//Router dependencies
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import { Provider } from 'react-redux';
import store from './components/redux/store/store.js';


// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }

const router = (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRedirect to="/home"></IndexRedirect>
						<Route path="home" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/frame-data" component={FrameData} />
						<Route path="/register" component={Register} />
				</Route>
			</Router>
		</Provider>
	)

render(router, document.getElementById('app'));