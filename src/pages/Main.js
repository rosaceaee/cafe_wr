import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SummaryWordBox from "../components/SummaryWordBox";
import list from "../list";
import "../style/common.scss";
import SignIn from "./SignIn";
import Wrapper from "../components/Wrapper";

const Main = () => {
  const [asdf, setasdf] = React.useState([]);

  React.useEffect(() => {
    // setTimeout() simulates the time needed to fetch the data from the api
    setTimeout(() => {
      setasdf(list);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      {/*
      <div>
        {asdf.lists &&
          asdf.lists.map((item, index) => {
            return (
              <div>
                <p>{item.creator}</p>
              </div>
            );
          })}
      </div>
       */}

      <article>
        <p> 섹션 - 헤더 - 메인 </p>
        <section className="wrap">
          <div className="desc">
            <SummaryWordBox />
          </div>
        </section>
      </article>
    </>
  );
};

export default Main;
