import React from 'react';

export default class FrameDataTableHeader extends React.Component {
	render() {
		return (
			<thead className="category-container">
				<tr>
					<th className="category notation">Notation</th>
					<th className="category hit-level">Hit Level</th>
					<th className="category damage">Damage</th>
					<th className="category speed">Speed</th>
					<th className="category on-block">On Block</th>
					<th className="category on-hit">On Hit</th>
					<th className="category on-CH">On CH</th>
					<th className={this.props.hide}>Something</th>
				</tr>
			</thead>
			)
	}
}