import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import {
  GridContainer,
  GridItem,
  GridItemFlex,
  GridItemSpan,
} from "../../Style/Div";
import { HeadingCenter } from "../../Style/Heading";
import { Pcenter } from "../../Style/Paragraph";
import { Span } from "../../Style/Span";
import "./style.css";

function Header() {
  const [state, setstate] = useState({
    date: "00",
    hour: "00",
    minute: "00",
    second: "00",
  });

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("April 4 , 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        //stop out timer
        clearInterval(interval.current);
      } else {
        // update timer
        setstate({
          date: days,
          hour: hours,
          minute: minutes,
          second: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <GridContainer>
      <GridItem>
        <img src={logo} style={{ width: 400 }} />
      </GridItem>
      <GridItem>
        <GridItemFlex>
          <HeadingCenter>{state.date}</HeadingCenter> <Pcenter>ngày</Pcenter>
          <HeadingCenter primary>:</HeadingCenter>
          <HeadingCenter>{state.hour}</HeadingCenter> <Pcenter>giờ</Pcenter>
          <HeadingCenter primary>:</HeadingCenter>
          <HeadingCenter>{state.minute}</HeadingCenter> <Pcenter>phút</Pcenter>
          <HeadingCenter primary>:</HeadingCenter>
          <HeadingCenter>{state.second}</HeadingCenter> <Pcenter>giây</Pcenter>
        </GridItemFlex>
      </GridItem>
      <GridItem>
        <GridItemSpan>
          <Span MontserratBold>0911 424 282</Span>
          <Span Between padd>
            |
          </Span>
          <Span MontserratBold>laboviettien.net</Span>
        </GridItemSpan>
      </GridItem>
    </GridContainer>
  );
}

export default Header;
