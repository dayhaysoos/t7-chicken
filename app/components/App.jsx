import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	console.log(state);
	return {
		selectedCharacter: state.selectedCharacter,
		frameData: state.frameData,
		moves: state.frameData[state.selectedCharacter.selected].moves
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;