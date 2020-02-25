import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

class Smurf extends Component {
  deleteSmurf = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.smurf);
  };

  render() {
    return (
      <div className="smurf">
        <Card>
          <CardBody>
            <h3>Name: {this.props.smurf.name}</h3>
            <h4>Age: {this.props.smurf.age}</h4>
            <h4>Height: {this.props.smurf.height}</h4>
            <Button color="primary" size="sm" onClick={this.deleteSmurf}>
              Delete Smurf
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
