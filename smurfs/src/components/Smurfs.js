import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        <h1>SMURFS</h1>
        <div>
          {this.props.smurfs.map((smurf, index) => (
            <Smurf smurf={smurf} key={index} index={index} />
          ))}
        </div>
        <Link to="/addsmurf">Add Smurf</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ error, smurfs, fetchingSmurfs }) => ({
  error,
  smurfs,
  fetchingSmurfs
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSmurfs }
  )(Smurfs)
);
