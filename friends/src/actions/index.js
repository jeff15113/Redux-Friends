import Axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAIL = "ADD_FRIEND_FAIL";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  Axios.get("http://192.168.1.246:5000/api/friends")
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err }));
};

export const addingFriend = () => {
  return { type: ADDING_FRIEND };
};

export const addFriend = friends => dispatch => {
  dispatch({ type: ADD_FRIEND });
  Axios.post(`http://192.168.1.246:5000/api/friends`, friends)
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FRIEND_FAIL, payload: err }));
};
