import axios from "axios";

export const GET_SMURFS_PENDING = "GET_SMURFS_PENDING";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_PENDING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_FAIL, payload: err.message });
    });
};

export const ADD_SMURF_PENDING = "ADD_SMURF_PENDING";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_PENDING });
  axios
    .post("http://localhost:3333/smurfs", {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })

    .catch(err => {
      dispatch({ type: ADD_SMURF_FAIL, payload: err.message });
    });
};

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL";
export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAIL, payload: err.message });
    });
};
