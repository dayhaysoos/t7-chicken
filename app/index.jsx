import React from 'react';
import ReactDOM from 'react-dom';
import styles from './components/App.scss';
import routes from './routes.jsx';

console.log(routes);

ReactDOM.render(routes(), document.getElementById('app'));




