import React from 'react';

export default class FrameDataTable extends React.Component {
	render() {
		return (
			<tbody>
				<tr className="attack-data">
					<td className="move-item">{this.props.notation}</td>
					<td className="move-item">{this.props.hitLevel}</td>
					<td className="move-item">{this.props.damage}</td>
					<td className="move-item">{this.props.speed}</td>
					<td className="move-item">{this.props.onBlock}</td>
					<td className="move-item">{this.props.onHit}</td>
					<td className="move-item">{this.props.onCH}</td>
				</tr>
			</tbody>
			);
	}
}