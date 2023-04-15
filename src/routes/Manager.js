import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import First from "../pages/First";

const Manager = () => {
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route exact path="/pages/First" component={<First />} />
        </Routes>
      </Router>
    </>
  );
};

export default Manager;

{
  /*
import DefaultLayout from 'src/layouts/DefaultLayout';
import DashBoard from 'src/pages/DashBoard';
import Campuses from 'src/pages/Campuses';

const HeadManager = () => {
  return (
    <>
      <DefaultLayout exact path="/dashboard" component={DashBoard} />
      <DefaultLayout exact path="/campus" component={Campuses} />
      <DefaultLayout exact path="/credit" component={Credits} />
      <DefaultLayout exact path="/i-frame/:url" component={IframePage} isHeaderStatic={true} />
      <DefaultLayout exact path="/openAiUsage" component={OpenAiUsage} />
      <DefaultLayout exact path="/" component={DashBoard} />
    </>
  );
};

export default HeadManager;
*/
}
