import React, { useEffect, useState } from "react";
import {
  SFirstWrapper,
  STopWrapper,
  SBottomWrapper,
  STextWrapper,
} from "../style/SFirst";

const First = () => {
  const first = "";
  const two = "welcomeMessage(name:string):void{";
  const three =
    "    const message: string = `환영합니다 ${name}의 포트폴리오 입니다`;";
  const four = "    console.log(message);";
  const five = "}";
  const six = "welcomeMessage(userName);";

  return (
    <SFirstWrapper>
      <STopWrapper>
        <h1 id="top">FRONT-END DEV</h1>
        <h1 id="top">FRONT-END DEV</h1>
      </STopWrapper>
      <img
        src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/236f8213-1430-45b1-ae9a-cfeb8ba7a711"
        alt=""
      />
      <STextWrapper></STextWrapper>
      <SBottomWrapper>
        <h1 id="bottom">JIN JAEHWAN</h1>
        <h1 id="bottom">JIN JAEHWAN</h1>
      </SBottomWrapper>
    </SFirstWrapper>
  );
};

export default First;
