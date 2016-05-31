import React from 'react';

class CharacterList extends React.Component {
	renderCharNames(charData) {
		console.log(charData);
		let charNames = [];
		for(var key in charData) {
			if(charData.hasOwnProperty(key)) {
				this.charData = charData;
				charNames.push(<option className="character-name">
					{this.charData[key].metadata.character}
					</option>);
			}
		}
		return charNames;
	}
	render() {
		return ( 
			<select className="char-list">
				{this.renderCharNames(this.props.charData)}
			</select>
			);
	}
}

export default class FrameData extends React.Component {
	constructor(props) {
		super(props);
	}

	

	componentWillMount() {
		function requireAll(requireContext) {
			return requireContext.keys().map(requireContext);
		}

		let data = requireAll(require.context('../data/t7', false, /\.json$/));

		this.state = {
			data
		}
	}

	render() {
		return( 
			<div className="frame-data-container container text-center">
			<h2>Frame Data</h2>
				<CharacterList charData={this.state.data}></CharacterList>
			</div>
		)
	}
 }