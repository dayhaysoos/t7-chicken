import React from 'react';

export default class FrameDataTableHeader extends React.Component {

	hider() {
		return 'column-hide'
	}

	hitLevelStateCheck() {
		if(this.props.checkBoxStates.hitLevelCheckbox == false) {
			return this.hider()
		}
	}

	damageStateCheck() {
		if(this.props.checkBoxStates.damageCheckbox == false) {
			return this.hider()
		}
	}

	speedStateCheck() {
		if(this.props.checkBoxStates.speedCheckbox == false) {
			return this.hider()
		}
	}

	onBlockStateCheck() {
		if(this.props.checkBoxStates.onBlockCheckbox == false) {
			return this.hider()
		}
	}

	onHitStateCheck() {
		if(this.props.checkBoxStates.onHitCheckbox == false) {
			return this.hider()
		}
	}

	onCHStateCheck() {
		if(this.props.checkBoxStates.onCHcheckbox == false) {
			return this.hider()
		}
	}

	render() {
		return (
			<thead className="category-container">
				<tr>
					<th>Notation</th>
					<th className={this.hitLevelStateCheck()}>Hit Level</th>
					<th className={this.damageStateCheck()} >Damage</th>
					<th className={this.speedStateCheck()}>Speed</th>
					<th className={this.onBlockStateCheck()}>On Block</th>
					<th className={this.onHitStateCheck()}>On Hit</th>
					<th className={this.onCHStateCheck()}>On CH</th>
				</tr>
			</thead>
			)
	}
}