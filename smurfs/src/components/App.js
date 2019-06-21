import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/smurfs" component={Smurfs} />
          <Route exact path="/addsmurf" component={AddSmurf} />
        </div>
      </Router>
    );
  }
}

export default App;
