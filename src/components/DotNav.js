import React, { useState, useEffect } from "react";

const DotNav = () => {
  return (
    <>
      <div id="circle" className="circle">
        <ul id="dot-wrap">
          <li className="elem">A</li>
          <li className="elem hover">UP</li>
          <li className="elem centerdot">dot</li>
          <li className="elem">3</li>
          <li className="elem">4</li>
        </ul>
      </div>
    </>
  );
};

export default DotNav;
