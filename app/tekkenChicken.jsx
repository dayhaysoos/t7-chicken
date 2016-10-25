import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

//import css 
import css from './components/App.scss';

// import components
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import FrameData from './components/FrameData/FrameData.jsx';
import Register from './components/Register/Register.jsx';

//Router dependencies
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './components/redux/store/store.js';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://my-api.graphql.com')
});


const router = (
		<ApolloProvider store={store} client={client}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}></IndexRoute>
						<Route path="/login" component={Login}></Route>
						<Route path="/frame-data" component={FrameData}></Route>
						<Route path="/register" component={Register}></Route>
				</Route>
			</Router>
		</ApolloProvider>
	)

render(router, document.getElementById('app'));