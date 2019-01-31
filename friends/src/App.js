import React, { Component } from "react";
import "./App.css";

import { getFriends } from "./actions";
import { connect } from "react-redux";

import Header from "./components/header/Header";
import FriendsList from "./components/friendslist/FriendsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    console.log("mounted");
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FriendsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
