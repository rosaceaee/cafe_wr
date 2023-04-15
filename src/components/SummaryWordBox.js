// 박스 하단의 단어 요약 박스 넣어주세요.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import list from "../list";

const SummaryWordBox = () => {
  const [asdf, setasdf] = React.useState([]);

  React.useEffect(() => {
    // setTimeout() simulates the time needed to fetch the data from the api
    setTimeout(() => {
      setasdf(list);
    }, 1000);
  }, []);

  return (
    <>
      <p>매장 순서는 무작위로 업데이트됩니다. </p>

      <div className="cardbox-con">
        <div>
          {asdf.lists &&
            asdf.lists.map((item, index) => {
              return (
                <div className="summary" key={index}>
                  <span className="card-num">{item.title}</span>
                  <div className="content">
                    <ul className="shop-info-wrap">
                      <li>
                        {" "}
                        <span>매장명</span> : {item.creator[0]}
                      </li>
                      <li>
                        {" "}
                        <span>주소</span> : {item.creator[1]}
                      </li>
                      <li>
                        {" "}
                        <span>가격대</span> : {item.price} ~
                      </li>
                      <li>
                        <div className="pick-con">
                          <div>
                            <Link to="/">응애</Link>
                          </div>
                          <div>
                            <Link to="/">솔로</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SummaryWordBox;

{
  /*
        {volume === 1 ? (
          <Link to={{ pathname: `${BOOK_WN_BASE_URL}Awesome_Level${level}_V${volume}_WN_Unit1.pdf` }} target="_blank">
            <BookCoverImage src={`${BOOK_COVER_BASE_URL}WN/L${level}V${volume}.jpg`} />
          </Link>
        ) : (
          <BookCoverImage src={`${BOOK_COVER_BASE_URL}WN/L${level}V${volume}.jpg`} />
        )}
       */
}
