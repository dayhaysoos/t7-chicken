import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* component dependencies */
import CharacterSelect from './CharacterSelect';
import FrameDataTableHeader from './FrameDataTableHeader';
import FrameDataTable from './FrameDataTable';
import SearchBar from './../SearchBar/SearchBar';
import SearchInput, {createFilter} from 'react-search-input';
import Categories from './../Categories/Categories';
import PracticalAttacks from './PracticalAttacks';
import { isHighAttack } from './filters.js';

/* dispatch actions */
import { fetchCharacterData } from '../redux/actions/character-data-action';
import { updateSearchFilter } from '../redux/actions/search-filter-action';
import { toggleHighCrush } from '../redux/actions/filter-action';
import { addFilter } from '../redux/actions/filter-action';
import { removeFilter } from '../redux/actions/filter-action';

/* json list of characters (MOVE TO AN API CALL IN FUTURE)*/
import selectOptions from '../../json/characters';

function FilterBy ({filterName, filterFn, addFilter }) {
	return <button onClick={() => addFilter(filterFn)}>{filterName}</button>
}

function RemoveFilterBy({filterName, filterFn, removeFilter }) {
	return <button onClick={() => removeFilter(filterFn)}>{filterName}</button>
}

const FilterByContainer = connect(() => ({}), { addFilter })(FilterBy);

const RemoveFilterByContainer = connect(() => ({}), {removeFilter})(RemoveFilterBy);
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
		this.frameDataFilter = this.props.filteredData;
	}

	componentWillReceiveProps(nextProps) {
	  let nextFrameData = nextProps.filteredData.slice()

	  nextFrameData = this.searchFilterList(nextProps.searchFilter.searchFilter, nextFrameData);

	  this.frameDataFilter = nextFrameData;
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
						filter={this.props.filter}
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
		let highCrushFilter = (this.props.filter.hitLevel.levels.indexOf('TC') != -1);
		this.props.dispatch( toggleHighCrush(highCrushFilter ? false : true) );

	}

	searchDispatcher(event) {
		let text = event.target.value;
		this.props.dispatch( updateSearchFilter(text) );
	}

	searchFilterList(text, frameData) {
		console.log(frameData, 'search filter frameData');
		let updatedList = frameData;
		updatedList = updatedList.filter(function(move) {
		return move.notation.toLowerCase().search(text.toLowerCase()) !== -1;
	});
	return updatedList;
	}


	render() {
		console.log(this.props);
		return(
			<div className="frame-data-container">
				<FilterByContainer filterName="High Attacks" filterFn={isHighAttack} />
				<RemoveFilterByContainer filterName="Remove High Filter" filterFn={isHighAttack} />
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

function filteredAttacks(state) {
	let { attackFilters } = state;
	let { frameData } = state.characterData;
	return frameData.filter(attack => attackFilters.every(filter => filter(attack)));
}

const mapStateToProps = function(state) {
    let { frameData, character} = state.characterData;
    let { filter, searchFilter, attackFilters } = state;
    return {
        character,
        filter,
        searchFilter,
				filteredData: filteredAttacks(state)
    }
}


const mapDispatchToProps = function(dispatch) {
	return {
		dispatch,
		addFilter,
		removeFilter
	 };
}

export default connect( mapStateToProps, mapDispatchToProps )(FrameData);
