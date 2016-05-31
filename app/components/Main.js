import React from 'react';
import Navbar from './Navbar/Navbar.jsx';

export default class Main extends React.Component {
  render() {

    return(
      <div className="container">
        <Navbar />
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
            
        );
  }
}