import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";

{
  /*}
const Asdf = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Asdf />} />
        <Route exact path="/" element={<Header />} />
      </Routes>
    </>
  );
};*/
}

function Asdf() {
  return (
    <>{/*
      <Header exact path="/login" element={<SignIn />} />
      */}</>
  );
}

export default Asdf;
