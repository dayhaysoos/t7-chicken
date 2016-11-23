import  { 
  CHARDATA_FETCHING,
  CHARDATA_FETCH_SUCCESS,
  CHARDATA_FETCH_ERROR
} from './../actions/actionCreators';
// reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state
const initialState = {
  character: "",
  frameData: [],
  metaData: [],
  loading: false
};

function characterData(state = initialState, action) {
  switch (action.type) {

    case CHARDATA_FETCHING:
      console.log('payload', action.payload);
      return Object.assign({}, state, {
        loading: true
      });
      break;

    case CHARDATA_FETCH_SUCCESS:
      console.log('payload', action.payload);
      return Object.assign({}, state, {
        frameData: action.payload.moves,
        metaData: action.payload.metadata,
        character: action.character,
        loading: false
      });

    case CHARDATA_FETCH_SUCCESS:
      return Object.assign({}, state, {
        character: action.character,
        error: actiona.error,
        loading: false
      });
  }

	return state;
}

export default characterData;