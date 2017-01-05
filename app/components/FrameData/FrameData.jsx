import React from 'react';
import { connect } from 'react-redux';

/* component dependencies */
import CharacterSelect from './CharacterSelect';
import FrameDataTableHeader from './FrameDataTableHeader';
import FrameDataTable from './FrameDataTable';
import SearchBar from './../SearchBar/SearchBar';
import SearchInput, {createFilter} from 'react-search-input';
import Categories from './../Categories/Categories';
import PracticalAttacks from './PracticalAttacks';

/* dispatch actions */
import { fetchCharacterData } from '../redux/actions/character-data-action';
import { updateSearchFilter } from '../redux/actions/search-filter-action';
import { toggleHighCrush } from '../redux/actions/filter-action';

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
			onCHcheckbox: true,
			searchTerm: ''
		}
		this.frameDataFilter = this.props.frameData;
	}

	componentWillReceiveProps(nextProps) {
		this.categoryFilterList(nextProps);
		this.searchFilterList(nextProps.searchFilter.searchFilter, nextProps.frameData);
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

	toggleHighCrush = () => {
		console.log('yo wtf');
		this.props.dispatch( toggleHighCrush('highCrush') );
	}

	searchDispatcher(event) {
		let text = event.target.value;
		this.props.dispatch( updateSearchFilter(text) );
	}

	searchFilterList(text, frameData) {
		let updatedList = frameData;
		updatedList = updatedList.filter(function(move) {
		return move.notation.toLowerCase().search(text.toLowerCase()) !== -1;
	});
		return this.frameDataFilter = updatedList;
	}

	categoryFilterList(filterStates, frameData) {
		console.log(filterStates.filter, 'filter states');
	}

	render() {
		console.log(this.props);
		const { frameData } = this.props;
		return(
			<div className="frame-data-container">
				<button onClick={this.toggleHighCrush}>Test Button</button>
					<h2>Frame Data</h2>
					<div className="input-container">
						<select onChange={(event) => this.handleChange(event)}>
							<option defaultValue="Select Character">Select Character</option>
							{this.renderCharacterSelectOptions(selectOptions.characters)}
						</select>
						<input className="search-input" onChange={(text) => this.searchDispatcher(text)} />
					</div>
					<div className="checkbox-container">
						Hit Level <input name="hitLevelCheckbox" checked={this.state.hitLevelCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
						Damage <input name="damageCheckbox" checked={this.state.damageCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
						Speed <input name="speedCheckbox" checked={this.state.speedCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
						On Block <input name="onBlockCheckbox" checked={this.state.onBlockCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
						On Hit <input name="onHitCheckbox" checked={this.state.onHitCheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
						On CH <input name="onCHcheckbox" checked={this.state.onCHcheckbox} onChange={(event) => this.hideColumnToggle(event)} type="checkbox" />
					</div>
					<div className="table-container">
						<table cellSpacing="0" cellPadding="1">
							<tbody>
								{this.renderFrameData(this.frameDataFilter)}
							</tbody>
						<FrameDataTableHeader checkBoxStates={this.state} />
						</table>
					</div>
					<PracticalAttacks />
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	console.log(state, 'some state stuff');
	return {
		frameData: state.characterData.frameData,
		character: state.characterData.character,
		filter: state.filter,
		searchFilter: state.searchFilter
	}
}

const mapDispatchToProps = function(dispatch) {
	return { dispatch };
}

export default connect( mapStateToProps, mapDispatchToProps )(FrameData);
