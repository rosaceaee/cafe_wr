import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Asdf from "../Asdf";
import posts from "../list.json";
import First from "../pages/First";
import SignIn from "../pages/SignIn";
import Routee from "../Routee";
import Manager from "../routes/Manager";
import BabyFriendly from "../pages/BabyFriendly";
{
  /*
const posts = [
  {
    url: "",
    tags: ["z", "d"],
    title: "asdf"
  },
  {
    url: "",
    tags: ["zz", "dddd"],
    title: "2222"
  },
  {
    url: "",
    tags: ["zz", "dddd"],
    title: "x"
  }
];

https://www.makeuseof.com/react-search-bar-filters-data-create/
*/
}

const Header = () => {
  const [state, setstate] = useState({
    query: "",
    list: []
  });
  const checkVal = (e) => {
    // setaa(e.target.value);
    const results = posts.lists.filter((post) => {
      if (e.target.value === "") return posts;
      return post.title.toString().includes(e.target.value.toString());
    });
    setstate({
      query: e.target.value,
      list: results
    });
  };

  return (
    <>
      {" "}
      <Routes>
        <Route exact path="/login" element={<Asdf />} />
      </Routes>
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
        <div className="descHeader-con" style={{ flexDirection: "row" }}>
          <h3 className="descHeader">Cafe meguri with my wallet</h3>
          <p className="descHeader">
            이 컨텐츠는 제작자의 혈관, 그리고 통장으로 만들었습니다 :)
          </p>
          {/*
          <p>
            {" "}
            아이와 함께 가기 좋은 / 혼자서도 좋은 / 풍경이 좋은 / 주류판매하는 /
            라떼맛집 / 브런치{" "}
          </p>
          */}

          <div className="pick-con">
            <div>
              <Link to="/babyfriendly">응애</Link>
            </div>
            <div>
              <Link to="/">솔로</Link>
            </div>
            <div>
              <Link to="/">뷰</Link>
            </div>
            <div>
              <Link to="/">주류</Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
          </div>

          <div className="search-con">
            <h3>상호명으로 찾기</h3>

            <div id="search-wrap">
              <input type="search" value={state.query} onChange={checkVal} />
              <label>췤</label>
            </div>

            <div>
                
              {state.query === ""
                ? ""
                : !state.list.length
                ? "철자 다시 췍해보삼"
                : state.list.map((post) => {
                    // return <p key={post.title}>{post.title} </p>;
                    return (
                      <>
                        <Link to={{ pathname: `/pages/First` }}>
                          {" "}
                          <p key={post.title}>{post.title} </p>
                        </Link>
                      </>
                    );
                    {
                      /* <Link to={{ pathname: `/offline/lesson/view/${record.idx}/${record.programlevel}` }}>View</Link>
                       */
                    }
                  })}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
