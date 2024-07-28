import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Space, DatePicker, version, Col, Row } from "antd";

import shoplist from "./shoplist/shoplist";
import Result from "./Result";

import "../style/common2.scss";

const Main = () => {
  const [num, setNum] = useState(0);
  const [set, setSet] = useState(false);
  const [bind, setBind] = useState([]);
  const [displayAns, setDisplayAns] = useState(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setasdf(list);
  //   }, 1500);
  // }, []);

  const survey = [
    {
      question: "인원 수를 알려주세요!",
      answers: ["혼자", "두 명 이상", "아이도 함께"],
    },
    {
      question: "어떤 분위기를?",
      answers: ["조용", "활기찬", "분위기 예쁜"],
    },
  ];

  const answerClick = (ans) => {
    const newAnswer = { question: survey[num].question, answer: ans };
    setBind([...bind, newAnswer]);

    if (num + 1 < survey.length) {
      setNum(num + 1);
      num + 1;
    } else {
      setSet(true);
    }
  };

  const transfer = [num, setNum, set, setSet, bind, setBind];

  return (
    <>
      <main>
        {bind.length > 0 &&
          bind.map((a, b) => {
            return (
              <>
                <p>{a.answer}</p>
                <hr />

                {b > 0 ? "" : ""}
              </>
            );
          })}

        {set ? (
          <>
            <Result transfer={transfer} />
          </>
        ) : (
          <>
            <div className="con-survey">
              <h2>{survey[num].question}</h2>
              <div className="options">
                {survey[num].answers.map((ans, idx) => (
                  <div class="select-cardbox" onClick={() => answerClick(ans)}>
                    <div class="eff">{ans}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Main;
