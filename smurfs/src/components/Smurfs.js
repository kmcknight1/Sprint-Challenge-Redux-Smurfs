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
      </div>
    );
  }
}

const mapStateToProps = ({ error, smurfs, fetchingSmurfs }) => ({
  error,
  smurfs,
  fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
