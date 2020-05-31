import React from "react";
import { connect } from "frontity";

const Home = ({ state, actions, libraries }) => {
  console.log(state);
  return <h1>Home</h1>;
};

export default connect(Home);
