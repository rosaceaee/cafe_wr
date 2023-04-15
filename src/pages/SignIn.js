import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <header>
        <div className="signin-con">
          <p onClick={() => navigate(-1) || navigate("/")}> back</p>
          <p>Register</p>
        </div>
      </header>

      <section>
        <h2>signin</h2>
        <div>
          <p>ㄱㄱ</p>
        </div>
      </section>
    </>
  );
};

export default SignIn;
