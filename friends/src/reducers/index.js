import {
  FETCHING_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  ADDING_FRIEND
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  isAdding: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true, error: null };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: null,
        isAdding: false
      };

    case ADDING_FRIEND:
      return { ...state, isAdding: true };

    default:
      return state;
  }
};
