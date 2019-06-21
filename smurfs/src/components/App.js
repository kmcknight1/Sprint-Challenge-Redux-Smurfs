import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Welcome to Smurfs Village via REDUX!</h1>
          </header>
          <div>
            <Link to="/smurfs">Get those Smurfs!</Link>
          </div>
          <Route exact path="/smurfs" component={Smurfs} />
          <Route exact path="/addsmurf" component={AddSmurf} />
        </div>
      </Router>
    );
  }
}

export default App;
