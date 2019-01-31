import React from "react";
import Friend from "./friend";
import ConditionalCard from "./ConditionalCard";
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
      <ConditionalCard
        handleChanges={props.handleChanges}
        add={props.add}
        adding={props.adding}
        addFriend={props.addFriend}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  friendslist: state.friends
});

export default connect(
  mapStateToProps,
  {}
)(FriendsList);
