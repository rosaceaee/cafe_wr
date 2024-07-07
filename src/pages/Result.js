import React, { useState, useEffect } from "react";
import { Button, Col, Row, Switch } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";

import shoplist from "./shoplist/shoplist";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../style/common.scss";

const Result = ({ transfer }) => {
  const [num, setNum, set, setSet, bind, setBind] = transfer;
  const [loading, setLoading] = useState(true);
  const [bookMark, setBookMark] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      applyFilters();
      setLoading(false);
    }, 1500);
  }, []);

  const refree = () => {
    setBind([]);
    setNum(0);
    setSet(false);
  };

  const applyFilters = () => {
    let filteredList = shoplist;

    bind.forEach(({ answer }) => {
      filteredList = filteredList.filter(
        (item) => item.person === answer || item.mood === answer
      );
    });

    setFilter(filteredList);
  };

  //   const showFilter = (e) => {
  //     const { mood, person } = e.target.value;
  //     const filteredList = shoplist.filter(
  //       (item) => item.mood === mood || item.person === person
  //     );
  //     setFilter(filteredList);
  //   };
  const showFilter = (e) => {
    const value = e.target.value;
    let filteredList = shoplist;

    if (value) {
      filteredList = shoplist.filter(
        (item) => item.person === value || item.mood === value
      );
    }

    setFilter(filteredList);
  };

  //  BookMark
  const openBookMark = () => {
    bookMark ? setBookMark(false) : setBookMark(true);
  };

  // Use localStorage to add each bookmark
  const addBookMark = (item) => {
    const bookmarkList = localStorage.getItem("bookmark") || "[]";
    const parsedList = JSON.parse(bookmarkList);
    const newItem = {
      mood: item.mood,
      shopName: item.shopName,
    };
    const newList = [...parsedList, newItem];

    localStorage.setItem("bookmark", JSON.stringify(newList));
  };

  return (
    <>
      {loading ? (
        <h2>기다려주세요!</h2>
      ) : (
        <>
          <Button type="circle" onClick={openBookMark}>
            <HeartFilled />
          </Button>
          {bookMark ? (
            <div className="wrap-bookmark">
              <h1>BookMark filteredList</h1>
              {filter.map((item, idx) => (
                <div key={idx}>
                  <p>
                    {item.name} / {item.person} / {item.mood} / {item.alcohol}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <Row>
            <h3>음주 가능여부</h3>{" "}
            <Switch
              checkedChildren="음주가능"
              unCheckedChildren="일반"
              defaultChecked
            />
          </Row>
          <h1>결과</h1>
          {filter.length > 0 ? <p>{filter.length} 찾음</p> : <p>ㅈㅅ 없네여</p>}
          <Row>
            <Col span={18}>
              {bind.map((a, b) => (
                <Button
                  type="primary"
                  value={a.answer}
                  key={b}
                  onClick={showFilter}
                >
                  {a.answer}
                </Button>
              ))}
            </Col>
            <Col span={3}>
              <Button type="primary">Filter</Button>
            </Col>
            <Col span={3}>
              <Button type="primary" onClick={refree}>
                다시 선택
              </Button>
            </Col>
          </Row>
          <section className="result-con">
            {filter.map((item, idx) => (
              <Row style={{ border: "3px solid blue" }}>
                <Col span={18}>
                  <Swiper
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    // onSlideChange={}
                  >
                    <SwiperSlide key={idx}>
                      <div className="con-shopinfo">
                        <h2>{item.person}</h2>
                        <h3>{item.mood}</h3>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Col>
                <Col span={6}>
                  <div key={idx} className="con-shopinfo">
                    <Button type="circle" onClick={() => addBookMark(item)}>
                      <HeartFilled />
                    </Button>
                    <h1>{item.person}</h1>
                    <h1>{item.mood}</h1> <p>영업 시간: {item.shopTime}</p>
                    <p>최소 가격: {item.minPrice}</p>
                  </div>{" "}
                </Col>
              </Row>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default Result;
