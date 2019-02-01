import Axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  Axios.get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err }));
};

export const addingFriend = () => {
  return { type: ADDING_FRIEND };
};

export const addFriend = action => {
  return {
    type: ADD_FRIEND,
    test: console.log(action)
  };
};
