import React from 'react';

export default class FrameDataTable extends React.Component {

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

	filterStateCheck() {

		//No active filters
		if(this.props.filter.activeFilters == 0)
			return true;

		let isFiltered = true;
		//Check hitLevel filter
		let hitLevelFilter = this.props.filter.hitLevel;
		if(hitLevelFilter.active) {
			hitLevelFilter.levels.forEach(function(level){
				if(this.props.hitLevel.search(level) !== -1)
					isFiltered = false;
			}.bind(this));
		}

		return !isFiltered;
	}
	
	render() {

		if(this.filterStateCheck()){
			console.log("Passed.");
			return (
				<tr className="attack-data">
					<td>{this.props.notation}</td>
					<td className={this.hitLevelStateCheck()}>{this.props.hitLevel}</td>
					<td className={this.damageStateCheck()}>{this.props.damage}</td>
					<td className={this.speedStateCheck()}>{this.props.speed}</td>
					<td className={this.onBlockStateCheck()}>{this.props.onBlock}</td>
					<td className={this.onHitStateCheck()}>{this.props.onHit}</td>
					<td className={this.onCHStateCheck()}>{this.props.onCH}</td>
				</tr>
			);
		}
		else
			return null;

	}
}