import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  Redirect,
  useHistory,
  useRouteMatch,
  useLocation,
  Link,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import Header from "../Header";
import worklists from "./works.json";

const ToggleItem = ({ descc, link, id }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div
      className="works work-img"
      key={id}
      onClick={() => setToggleThisElement((prev) => !prev)}
    >
      {/* 
     <button
       className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
     >
        click this btn for toggle h-info block {id}
      </button>
            */}

      {toggleThisElement && (
        <div className="desc-on">
          <h2>{descc}</h2>
          <a href={"/" + link} className="btn">
            {" "}
            check
          </a>
        </div>
      )}
    </div>
  );
};

const scrollDown = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};

const Works = (asdf) => {
  const [show, setShow] = useState(false);
  const aboutSection = useRef(null);
  const test = (e) => {
    setShow((show) => !show);
  };

  return (
    <>
      <Header />
      <nav>
        <p>web</p>
        <p onClick={() => scrollDown(aboutSection)}>app </p>
      </nav>
      <main>
        <section style={{ border: "1px solid", height: "100vh" }}>
          <section className="works-con">
            <h2 className="tit">Web</h2>
            {worklists.web.map((a, id, b) => {
              return (
                <>
                  <div>
                    <ToggleItem id={id} descc={a.desc[0]} link={a.desc[1]} />;
                  </div>
                </>
              );
            })}
          </section>
          <section className="works-con app-con" ref={aboutSection}>
            <h2 className="tit">App</h2>
            {worklists.app.map((a, id) => {
              return (
                <>
                  <div className="works work-img">
                    <ToggleItem id={id} descc={a.desc} />;
                  </div>
                </>
              );
            })}
          </section>
        </section>
        {/* 
          <div className="works work-img" onClick={() => test()}>
            <h4>1</h4>
            <div className={show ? "desc-on" : "desc"}>
              <p>웹앱</p>
              <p>파닉스몬스터</p>
              <p>유아이 개선 참여</p>
              <p>https://epublic-phonics.cloubot.com/</p>
            </div>
          </div>{" "}
          <div>
            <h4>피엠</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div className="works work-img" onClick={() => test()}>
            <h4>ㅁㅁ로펌</h4>
            <div className={show ? "desc-on" : "desc"}>
              <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
              <p> 디자인, 퍼블리싱 100% (이미지 선정 제외) </p>
            </div>
          </div>
          {/*<h1 ref={targetRef}>asdf</h1>
        </section>
        <section className="works-con app-con" ref={aboutSection}>
          <h2>App</h2>
          <div>
            <h4>교육용1</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>교육용2</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>교육용3</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>{" "}
        </section>*/}
      </main>
    </>
  );
};

export default Works;
