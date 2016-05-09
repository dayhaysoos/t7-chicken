import React from 'react';
import Table from './Table/Table.jsx';

class Navbar extends React.Component {
	render(){
		return(
			<h1>Tekken Chicken</h1>
			);
	}
}

export default class App extends React.Component {
  render() {

    return(
            <div className="container">
                <Navbar />
                <Table />
            </div>
        );
  }
}