import React from 'react';


class FrameDataTable extends React.Component {
	render() {
		return (
			<div className="attack-data">
				<div>{this.props.notation}</div>
				<div>{this.props.hitLevel}</div>
				<div>{this.props.damage}</div>
				<div>{this.props.speed}</div>
				<div>{this.props.onBlock}</div>
				<div>{this.props.onHit}</div>
				<div>{this.props.onCh}</div>
			</div>
			);
	}
}

export default class FrameData extends React.Component {

	render() {
		const { frameData } = this.props;

		return( 
			<div className="frame-data-container container text-center">
			<h2>Frame Data</h2>
			{
				frameData.alisa.moves.map((move, key) => {
					return (
						<FrameDataTable 
							key={key}
							notation={move.notation}
							hitLevel={move.hit_level}
							damage={move.damage}
							speed={move.speed}
							onBlock={move.on_block}
							onHit={move.on_hit}
							onCH={move.on_ch}
						/>
					);
				})
			}
			</div>
		)
	}
 }