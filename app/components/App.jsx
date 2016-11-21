import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actions/actionCreators';
import getVisibleData from './redux/filters/index.js';
import Main from './Main';

function mapStateToProps(state) {
	return {
		characters: state.characters,
		frameData: state.frameData,
		visibleData: getVisibleData(state)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;