import {
  GET_SMURFS_PENDING,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  ADD_SMURF_PENDING,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: "",
  addingSmurf: false,
  deletingSmurf: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_PENDING:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case ADD_SMURF_PENDING:
      return {
        ...state,
        error: "",
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        addingSmurf: false,
        smurfs: [action.payload]
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        error: "",
        deletingSmurf: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        deletingSmurf: false,
        smurfs: [action.payload]
      };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false
      };
    default:
      return state;
  }
};

export default reducer;
