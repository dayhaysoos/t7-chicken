import React from 'react';

export default class CharacterSelect extends React.Component {

	render() {
		return (
				<option>{this.props.option}</option>
			);
	}
}
