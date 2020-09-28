import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { connect } from "react-redux";
class App extends React.Component {
  handleTA(e) {
    this.props.dispatch({ type: "s_ta", payload: e.target.value });
  }
  handleIN(e) {
    this.props.dispatch({ type: "s_in", payload: e.target.value });
  }
  handleOB(e) {
    this.props.dispatch({ type: "s_ob", payload: e.target.value });
  }

  componentDidMount = () => {
    Promise.all([
      axios.get("http://localhost:3010/objectivefulltext"),
      axios.get("http://localhost:3010/indication"),
      axios.get("http://localhost:3010/therapeuticarea"),
    ]).then(([res1, res2, res3]) => {
      this.props.dispatch({
        type: "add_objectivefulltext",
        payload: res1.data.data,
      });
      this.props.dispatch({ type: "add_indication", payload: res2.data.data });
      this.props.dispatch({
        type: "add_therapeuticarea",
        payload: res3.data.data,
      });
    });
  };
  render() {
    return (
      <Fragment>
        <div>
          <center>
            {" "}
            <select onChange={(e) => this.handleTA(e)}>
              <option>select</option>
              {this.props.therapeuticarea ? (
                this.props.therapeuticarea.map((elem) => {
                  return <option value={elem.value}>{elem.value}</option>;
                })
              ) : (
                <option>select</option>
              )}
            </select>
          </center>
        </div>
        <div>
          <center>
            <select>
              <option>select</option>
              {this.props.s_therapeuticarea ? (
                this.props.indication.map((elem) => {
                  if (this.props.s_therapeuticarea === elem.therapeuticarea) {
                    return <option value={elem.value}>{elem.value}</option>;
                  }
                })
              ) : (
                <option>select</option>
              )}
            </select>
          </center>
        </div>
        <div></div>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return {
    objectivefulltext: state.objectivefulltext,
    indication: state.indication,
    therapeuticarea: state.therapeuticarea,
    s_objectivefulltext: state.s_objectivefulltext,
    s_indication: state.s_indication,
    s_therapeuticarea: state.s_therapeuticarea,
  };
};

export default connect(fromStore)(App);
