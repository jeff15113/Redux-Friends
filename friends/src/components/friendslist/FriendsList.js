import React from "react";
import Friend from "./friend";
import ConditionalCard from "./ConditionalCard";
import { addingFriend } from "../../actions";
import { connect } from "react-redux";

const FriendsList = props => {
  return (
    <div className="friendslist">
      {props.friendslist.map(data => (
        <Friend
          key={data.id}
          id={data.id}
          friend={data}
          removeFriend={props.removeFriend}
        />
      ))}
      {!props.fetchingfriends && (
        <ConditionalCard
          handleChanges={props.handleChanges}
          addFriend={props.addFriend}
          add={props.addingFriend}
          adding={props.adding}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  friendslist: state.friends,
  fetchingfriends: state.fetchingFriends,
  adding: state.isAdding
});

export default connect(
  mapStateToProps,
  { addingFriend }
)(FriendsList);
