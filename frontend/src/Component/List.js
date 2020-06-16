import { connect } from "react-redux";
import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";

class List extends React.Component {
  handleSort = (e) => {
    this.props.dispatch({ type: "sort", payload: e.target.value });
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    let items = this.props.projects;
    return (
      <Fragment>
        <div className="w-100 mt-5" style={{ height: "81.5vh" }}>
          <div className="select mx-auto w-25 py-3">
            <label>Sort By</label>
            <select
              className="form-control"
              onChange={(event) => {
                this.handleSort(event);
              }}
            >
              <option value="recent">Recent</option>
              <option value="category">Category</option>
              <option value="username">Username</option>
              <option value="project">Project</option>
            </select>
          </div>

          <div className="w-75 mx-auto my-5 table-responsive">
            <table className="table table-striped">
              <thead>
                <tr className="table-primary">
                  <th>Project</th>
                  <th>Username</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {items ? (
                  items.map((item) => {
                    return (
                      <tr className="table-light">
                        <td>{item.p_name}</td>
                        <td>{item.user.u_name}</td>
                        <td>{item.category.c_name}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>No Projects</td>
                    <td>No Projects</td>
                    <td>No Projects</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return { projects: state.projects, loggedIn: state.loggedIn };
};

export default connect(fromStore)(List);
