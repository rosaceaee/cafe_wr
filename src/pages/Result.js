import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "antd";
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

  const showFilter = (e) => {
    const mood = e.target.value;
    const filteredList = shoplist.filter((item) => item.mood === mood);
    setFilter(filteredList);
  };

  return (
    <>
      {loading ? (
        <h2>기다려주세요!</h2>
      ) : (
        <>
          <h1>결과</h1>
          <p>총 {filter.length}건 찾음</p>
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
            <Col span={6}>
              <Button type="primary" onClick={refree}>
                다시 선택
              </Button>
            </Col>
          </Row>
          <section className="result-con">
            <Row>
              <Col span={18}>
                <Swiper
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                >
                  {/* {filter.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="con-shopinfo">ㅇㅇ</div>
                    </SwiperSlide>
                  ))} */}
                  <SwiperSlide>dd</SwiperSlide> <SwiperSlide>dd</SwiperSlide>{" "}
                  <SwiperSlide>dd</SwiperSlide>
                  <SwiperSlide>dd</SwiperSlide>
                  <SwiperSlide>dd</SwiperSlide>
                  <SwiperSlide>dd</SwiperSlide>
                </Swiper>
              </Col>
              <Col span={6}>
                {filter.map((item, idx) => (
                  <div key={idx} className="con-shopinfo">
                    <h1>{item.person}</h1>
                    <h1>{item.mood}</h1>
                  </div>
                ))}
              </Col>
            </Row>
          </section>
        </>
      )}
    </>
  );
};

export default Result;
