import React from 'react';

class Category extends React.Component {
	render() {
		return (
			<div className="category-container">
				<div className="category">Notation</div>
				<div className="category">Hit Level</div>
				<div className="category">Damage</div>
				<div className="category">Speed</div>
				<div className="category">On Block</div>
				<div className="category">On Hit</div>
				<div className="category">On CH</div>
			</div>
			)
	}
}


class FrameDataTable extends React.Component {
	render() {
		return (
			<div className="attack-data">
				<div className="move-item">{this.props.notation}</div>
				<div className="move-item">{this.props.hitLevel}</div>
				<div className="move-item">{this.props.damage}</div>
				<div className="move-item">{this.props.speed}</div>
				<div className="move-item">{this.props.onBlock}</div>
				<div className="move-item">{this.props.onHit}</div>
				<div className="move-item">{this.props.onCh}</div>
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
			<Category />
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