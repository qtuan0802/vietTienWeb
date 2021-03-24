import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  const [state, setstate] = useState({
    date: new Date(),
  });
  const callTime = () => {
    setInterval(() => {
      setstate({ date: new Date() });
    }, 1000);
  };
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={logo} style={{ width: 400 }} />
      </div>
      <div className="grid-item">
        <div className="grid-item_flex">
          <h1>{state.date.getDate()}</h1> <p>ngày</p>
          <h1 className="grid-item_between">:</h1>
          <h1>{state.date.getHours()}</h1> <p>giờ</p>
          <h1 className="grid-item_between">:</h1>
          <h1>{state.date.getMinutes()}</h1> <p>phút</p>
          <h1 className="grid-item_between">:</h1>
          <h1>{state.date.getSeconds()}</h1> <p>giây</p>
          {callTime()}
        </div>
      </div>
      <div className="grid-item">
        <div className="grid-item_span">
          <span className="span-right">0911 424 282</span>{" "}
          <span className="grid-item-between">|</span>
          <span className="span-left">laboviettien.net</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
