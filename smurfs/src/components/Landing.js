import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Jumbotron>
      <h1>Welcome to Smurfs Village via REDUX!</h1>
      <p>
        Use Redux-Thunk middleware to make async axios calls and receive smurf
        data!
      </p>
      <Link to="/smurfs">
        <Button color="primary">Get those Smurfs!</Button>
      </Link>
    </Jumbotron>
  );
};

export default Landing;
