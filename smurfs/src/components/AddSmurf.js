import React, { Component } from "react";
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
    this.props.addSmurf(this.state);
    this.setState({ name: "", age: "", height: "" });
    this.props.history.push("/smurfs");
  };

  render() {
    return (
      <div>
        <h3>Add New Smurf</h3>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="Age"
            value={this.state.age}
            name="age"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="Height"
            value={this.state.height}
            name="height"
            onChange={this.handleChanges}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);
