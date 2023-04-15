import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../style/main.scss";

const BabyFriendly = () => {
  return (
    <>
      <header>
        <div className="signin-con">
          <p>
            <Link to="/login">SignIn</Link>
          </p>
          <p>
            {" "}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </header>
      <section>
        <div className="detail-shop-con">
          <div className="shop-img-con">
            <h3>Shop Num</h3>
          </div>
          <div className="review-con">
            <p>review wrap</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabyFriendly;
