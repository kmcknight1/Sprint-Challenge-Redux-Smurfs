import React, { Component } from "react";
import {
  Spinner,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Input,
  Alert
} from "reactstrap";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class AddSmurf extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    e.preventDefault();
    let valid = true;

    if (this.state.name.length > 15 || this.state.name.length < 2) {
      valid = false;
    }

    if (/\d/g.test(this.state.age) === false) {
      valid = false;
    }

    if (valid) {
      this.props.addSmurf(this.state);
      this.setState({ name: "", age: "", height: "" });
      this.props.history.push("/smurfs");
    } else {
      alert("Invalid Field Entry");
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h3>Add New Smurf</h3>
          <p>Fill out the input fields to add a new smurf to your village!</p>
        </Jumbotron>
        <Form onSubmit={this.addSmurf}>
          <FormGroup className="form-group">
            <Input
              type="text"
              placeholder="Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChanges}
            />
            <Input
              type="text"
              placeholder="Age"
              value={this.state.age}
              name="age"
              onChange={this.handleChanges}
            />
            <Input
              type="text"
              placeholder="Height"
              value={this.state.height}
              name="height"
              onChange={this.handleChanges}
            />
            <Button color="primary" type="submit">
              Add Smurf
            </Button>
          </FormGroup>
        </Form>
        {this.props.addingSmurf && (
          <div>
            <Spinner color="primary" />
            <h4>Adding Smurf</h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);
