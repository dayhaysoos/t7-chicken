import React from 'react';

export default class FrameDataTableHeader extends React.Component {
	render() {
		return (
			<thead className="category-container">
				<tr>
					<th className="category">Notation</th>
					<th className="category">Hit Level</th>
					<th className="category">Damage</th>
					<th className="category">Speed</th>
					<th className="category">On Block</th>
					<th className="category">On Hit</th>
					<th className="category">On CH</th>
				</tr>
			</thead>
			)
	}
}