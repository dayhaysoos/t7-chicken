import React from 'react';

export default class FrameDataTable extends React.Component {
	render() {
		return (
			<tbody>
				<tr className="attack-data">
					<td className="move-item notation">{this.props.notation}</td>
					<td className="move-item hit-level">{this.props.hitLevel}</td>
					<td className="move-item damage">{this.props.damage}</td>
					<td className="move-item speed">{this.props.speed}</td>
					<td className="move-item on-block">{this.props.onBlock}</td>
					<td className="move-item on-hit">{this.props.onHit}</td>
					<td className="move-item on-CH">{this.props.onCH}</td>
				</tr>
			</tbody>
			);
	}
}