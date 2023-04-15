import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Asdf from "./Asdf";
import SignIn from "./pages/SignIn";

function Routee() {
  return (
    <>
      <h1>zz</h1>
      <Router>
        <Route exact path="/login" element={Asdf} />
      </Router>
    </>
  );
}

export default Routee;
