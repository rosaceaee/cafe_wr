import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <header>
        <div className="signin-con">
          <p onClick={() => navigate(-1) || navigate("/")}> back</p>
        </div>
      </header>

      <section>
        <h2>Register</h2>
        <div>
          <p>ㄱㄱ</p>

          <form>
            <div>
              <legend> 이름 </legend>
              <input type="text" />
            </div>
            <div>
              <legend> 비번 </legend>
              <input
                type="password"
                placeholder="최소 6자리, 영문 대소문자 혼합"
              />
            </div>
            <div>
              <legend> 이메일 </legend>
              <input type="email" /> @
              <select>
                <option value="naver.com"> naver.com </option>
                <option value="gmail.com"> gmail.com </option>
                <option value=""> 직접입력 </option>
              </select>
              <legend> 이메일 인증</legend>
              <input type="submit" />
            </div>
          </form>

          <button>등록</button>
        </div>
        <div>
          <p>gmail 계정이 있다면</p>
        </div>
      </section>
    </>
  );
};

export default Register;
