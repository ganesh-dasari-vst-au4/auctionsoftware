import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Nav extends React.Component {
  handleLogout = () => {
    this.props.dispatch({ type: "logout" });
  };
  render() {
    return (
      <Fragment>
        {this.props.loggedIn ? (
          <div
            className="row  nav p-0 my-auto align-items-center"
            style={{ height: "4rem" }}
          >
            <div className="col-md-3">
              <h3>{this.props.loggedIn.user.u_name}</h3>
            </div>
            <div className="col-md-6 p-0 text-center ">
              <h3 className="mx-auto " style={{ color: "#F9F9F9" }}>
                Auction
              </h3>
            </div>
            <div className="col-md-3 ">
              <div className="float-right mr-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.handleLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="row  nav p-0 my-auto align-items-center"
            style={{ height: "4rem" }}
          >
            <div className="col-md-12 p-0 ">
              <h3 className="mx-auto mr-4" style={{ color: "#F9F9F9" }}>
                Auction
              </h3>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return { loggedIn: state.loggedIn };
};

export default connect(fromStore)(Nav);
