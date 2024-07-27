import React, { useState, useEffect } from "react";
import { Button, Space, DatePicker, version, Col, Row } from "antd";

import { Link, useNavigate } from "react-router-dom";
import shoplist from "./shoplist/shoplist";
import Result from "./Result";

import "../style/common2.scss";

const Main = () => {
  // const [asdf, setasdf] = useState([]);
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
      (num + 1)
    } else {
      setSet(true);
    }
  };

  // const displayy = (anss) => {
  //   setDisplayAns(displayAns === anss)
  // }

  const isAnswerSelected = (ans) => {
    return displayAns === ans;
  };

  const transfer = [num, setNum, set, setSet, bind, setBind];

  return (
    <>
      {/* {shoplist.filter((item) => item.mood == answer)} */}
      <main>
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
            // <Button key={idx} type="primary" onClick={() => answerClick(ans)}>
            //   {ans}
            // </Button>

            <div class="select-cardbox" onClick={() => answerClick(ans)}>
             <div class="eff">
               {ans}</div>
              </div>
          ))}
{/* 
          {bind.length > 0 && (bind.map((a,b) => {
            console.log(a.answer)
          }))} */}
          </div>

         
          </div>
          {/* {survey.map((item, index) => {
            if (index !== num) return null;

            return (
              <div key={index} className="con-step">
                <p>{item.question}</p>
                {item.answers.map((ans, idx) => (
                  <Button
                    key={idx}
                    type="primary"
                    onClick={() => answerClick(ans)}
                  >
                    {ans}
                  </Button>
                ))}
              </div>
            );
          })} */}
        </>
      )}
      </main>
      
    </>
  );
};

export default Main;
