import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Nav from "./Component/Nav";
import List from "./Component/List";
import Login from "./Component/Login";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount = () => {
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
        <div className="App container-fluid" style={{ height: "100vh" }}>
          <BrowserRouter>
            <Nav />

            <Switch>
              <Route exact path="/" component={List} />

              <Route path="/home" component={List} />
              <Route path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return state;
};

export default connect(fromStore)(App);
