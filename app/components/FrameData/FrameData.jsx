import React from 'react';
import { connect } from 'react-redux';

/* component dependencies */
import CharacterSelect from './CharacterSelect';
import FrameDataTableHeader from './FrameDataTableHeader';
import FrameDataTable from './FrameDataTable';
import SearchBar from './../SearchBar/SearchBar';

/* dispatch actions */
import { fetchCharacterData } from '../redux/actions/character-data-action';

/* json list of characters (MOVE TO AN API CALL IN FUTURE)*/
import selectOptions from '../../json/characters';

class FrameData extends React.Component {

	constructor(props) {
		super(props);
		this.state = {	
			hitLevelCheckbox: true,
			damageCheckbox: true,
			speedCheckbox: true,
			onBlockCheckbox: true,
			onHitCheckbox: true,
			onCHcheckbox: true
		}
	}

	handleChange = (event) => {
		const character = event.target.value;
		this.props.dispatch( fetchCharacterData(event.target.value) );
	}

	renderCharacterSelectOptions(options = []) {
		return options.map((name, key) => {
			return (
				<CharacterSelect
					key={key}
					option={name}
				/>
			)
		})
	}

	renderFrameData(data = []) {
		{
			return data.map((move, key) => {
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
						checkBoxStates={this.state}
					/>
				);
			})
		}
	}

	hideColumnToggle(event) {
		let checkboxName = event.target.name;
		this.setState({[checkboxName]: this.state[checkboxName] ? false : true});
	}
		
	render() {
		const { frameData } = this.props;

		return(
			<div className="frame-data-container row">
				<div className='small-8 columns centered'>
					<h2>Frame Data</h2>
					<select onChange={(event) => this.handleChange(event)}>
						<option defaultValue="Select Character">Select Character</option>
						{this.renderCharacterSelectOptions(selectOptions.characters)}
					</select>
					<SearchBar />					
					Hit Level <input name="hitLevelCheckbox" checked={this.state.hitLevelCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
					Damage <input name="damageCheckbox" checked={this.state.damageCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
					Speed <input name="speedCheckbox" checked={this.state.speedCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
					On Block <input name="onBlockCheckbox" checked={this.state.onBlockCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
					On Hit <input name="onHitCheckbox" checked={this.state.onHitCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
					On CH <input name="onCHcheckbox" checked={this.state.onCHcheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />

					<table>
					<FrameDataTableHeader checkBoxStates={this.state} />
						{this.renderFrameData(frameData)}
					</table>
				</div>
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		frameData: state.characterData.frameData,
		character: state.characterData.character
	}
}

const mapDispatchToProps = function(dispatch) {
	return { dispatch };
}

export default connect( mapStateToProps, mapDispatchToProps )(FrameData);

