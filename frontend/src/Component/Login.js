import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    name: "",
    password: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSend = () => {
    if (!this.state.name || !this.state.password) {
      return alert("Please fill the fields");
    }
    let user;
    this.props.projects.map((elem) => {
      if (
        this.state.name === elem.user.u_name &&
        this.state.password === elem.user.password
      ) {
        return (user = elem);
      }
    });

    if (!user) {
      alert("User not found!");
    } else {
      alert("Looged In");
      this.props.dispatch({ type: "login", payload: user });
    }
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <Fragment>
        <div className="d-flex flex-row justify-content-center pt-5 text-center login">
          <div
            className="card mt-3"
            style={{ width: "22rem", borderRadius: "20px" }}
          >
            <div className="card-body">
              <div className="p-4">
                <h3 className="card-title float-left pt-2 pb-4">Login</h3>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="https://img.icons8.com/material-rounded/24/000000/user.png" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="https://img.icons8.com/material-rounded/24/000000/password.png" />{" "}
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    phone={this.state.password}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="my-5 float-right">
                  <button
                    id="send"
                    onClick={() => {
                      this.handleSend();
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return { projects: state.projects, loggedIn: state.loggedIn };
};

export default connect(fromStore)(Login);
