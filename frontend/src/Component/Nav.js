import React, { Fragment } from "react";
import { connect } from "react-redux";

class Nav extends React.Component {
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

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
            <div className="col-md-4 ">
              <input
                className="float-left ml-2 form-control w-50"
                type="text"
                placeholder="search"
                value={this.state.search}
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
              <button
                className="float-left ml-2 btn btn-primary"
                onClick={() => {
                  this.handleSend();
                }}
              >
                Search
              </button>
            </div>
            <div className="col-md-5 p-0 ">
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
  return state;
};

export default connect(fromStore)(Nav);
