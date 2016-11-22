import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	return {
		characters: state.characters,
		frameData: state.frameData,
		test: state.test
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;