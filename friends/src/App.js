import React, { Component } from "react";
import "./App.css";

import { getFriends, addFriend } from "./actions";
import { connect } from "react-redux";

import Header from "./components/header/Header";
import FriendsList from "./components/friendslist/FriendsList";

const newFriend = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: newFriend
    };
  }
  componentDidMount() {
    console.log("mounted");
    this.props.getFriends();
  }

  addFriend = e => {
    e.preventDefault();
    // const task = this.state.task;
    const friend = this.state.friend;
    const newfriend = {
      name: friend.name,
      age: friend.age,
      email: friend.email
    };

    this.props.addFriend(newfriend);
    this.setState({
      friend: newFriend
    });
  };

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FriendsList
          handleChanges={this.handleChanges}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getFriends, addFriend }
)(App);
