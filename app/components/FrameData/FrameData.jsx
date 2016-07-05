import React from 'react';
import Table from '../Table/Table';

class CharacterList extends React.Component {
	renderCharNames(charData) {
		let charNames = [];
		for(var key in charData) {
			if(charData.hasOwnProperty(key)) {
				this.charData = charData;
				charNames.push(<option key={key} className="character-name">
					{this.charData[key].metadata.character}
					</option>);
			}
		}
		return charNames;
	}
	render() {
		return ( 
			<select onChange={this.props.onChange} className="char-list" defaultValue="Select Character" selected>
			<option value="Select" selected>Select Character</option>
				{this.renderCharNames(this.props.charData)}
			</select>
			);
	}
}

export default class FrameData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			character: null
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		function requireAll(requireContext) {
			return requireContext.keys().map(requireContext);
		}

		let data = requireAll(require.context('../data/t7', false, /\.json$/));

		this.setState({data});
	}


	handleChange(event) {
		this.setState({ character: event.target.value })
		let charRef = this.state.character;

		//get moves for character
		let moveList = [];
	
	}


	render() {
		console.log(this.state)
			return( 
			<div className="frame-data-container container text-center">
			<h2>Frame Data</h2>
				<CharacterList onChange={this.handleChange} charData={this.state.data} value={this.state.character} />
				<Table />
			</div>
		)
	}
 }