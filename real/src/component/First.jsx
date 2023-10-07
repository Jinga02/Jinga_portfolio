import React from "react";
import {
  SFirstWrapper,
  STopWrapper,
  SBottomWrapper,
  SImageWrapper,
} from "../style/SFirst";

const First = () => {
  return (
    <SFirstWrapper>
      <STopWrapper>
        <h1 id="top">FRONT-END DEV</h1>
        <h1 id="top">FRONT-END DEV</h1>
      </STopWrapper>
      <SImageWrapper>
        <img src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/45f01ea5-f4c4-4340-8c1f-3b1eddf06f84" />
      </SImageWrapper>
      <SBottomWrapper>
        <h1 id="bottom">JIN JAEHWAN</h1>
        <h1 id="bottom">JIN JAEHWAN</h1>
      </SBottomWrapper>
    </SFirstWrapper>
  );
};

export default First;
