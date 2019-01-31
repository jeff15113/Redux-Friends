import React, { Component } from "react";
import "./App.css";

import { getFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    getFriends();
  }

  render() {
    return <div className="App" />;
  }
}

export default connect(
  null,
  { getFriends }
)(App);
