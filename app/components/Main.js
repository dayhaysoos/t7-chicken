import React from 'react';
import Navbar from './Navbar/Navbar.jsx';

export default class Main extends React.Component {
  render() {
  	const { dispatch, isAuthenticated, errorMessage } = this.props
    return(
      <div className="container">
        <Navbar 
        	isAuthenticated={isAuthenticated}
        	errorMessage={errorMessage}
        	dispatch={dispatch}
        />
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
            
        );
  }
}