import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Nav from "./Component/Nav";
import List from "./Component/List";
import axios from "axios";

class App extends React.Component {
  componentWillMount = () => {
    axios
      .get("http://localhost:3010/list")
      .then((res) => {
        console.log(res);
        this.props.dispatch({ type: "list", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Fragment>
        <div className="App container-fluid">
          <Nav />
          <List />
        </div>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return state;
};

export default connect(fromStore)(App);
