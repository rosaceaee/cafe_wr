import React, { useState, useEffect } from "react";
import { Button, Space, DatePicker, version, Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../style/common.scss";

const Result = (transfer) => {
  const [set, setSet, bind, setBind] = transfer.transfer;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout((time) => {
      setSet(true);
      setLoading(false);
      return () => clearTimeout(time);
    }, 1500);
  }, [setSet]);

  return (
    <>
      {loading ? (
        <>
          <h2> 기다려주세요!</h2>;
        </>
      ) : (
        <>
          <h1> result </h1>
          <p>총 n건 찾음</p>
          <Row>
            <Col span={18}>
              {bind.map((a, b) => {
                return (
                  <>
                    <Button type="primary" key={b}>
                      {a.answer}
                    </Button>
                  </>
                );
              })}
            </Col>
            <Col span={6}>
              <Button type="primary">다시 선택</Button>
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
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>{" "}
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                </Swiper>
              </Col>
              <Col span={6}>other</Col>
            </Row>
          </section>
        </>
      )}
    </>
  );
};

export default Result;
