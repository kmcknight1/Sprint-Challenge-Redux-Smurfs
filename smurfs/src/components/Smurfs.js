import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
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
      <div className="smurfs">
        <Jumbotron>
          <h1>Smurf Village</h1>
          <p>
            Here are the Smurfs that currently populate your Village. Feel free
            to Add New Smurfs or Delete exiting Smurfs.{" "}
          </p>
        </Jumbotron>
        <div>
          {this.props.smurfs.map((smurf, index) => (
            <Smurf smurf={smurf} key={index} index={index} />
          ))}
        </div>
        <Link to="/addsmurf">
          <Button color="primary" size="lg" block>
            Add Smurf
          </Button>
        </Link>
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
