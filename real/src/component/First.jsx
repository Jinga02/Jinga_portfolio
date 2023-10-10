import React from "react";
import {
  SFirstWrapper,
  STopWrapper,
  SBottomWrapper,
  TypingWrapper,
} from "../style/SFirst";

const First = () => {
  const htmlContent = `
  프론트엔드 개발자 <br/>
  진재환의 포트폴리오 사이트입니다. 
  방문해주셔서 감사합니다.
  `;

  return (
    <SFirstWrapper>
      <STopWrapper>
        <h1 id="top" class="animate__animated animate__jackInTheBox">
          FRONT-END DEV
        </h1>
        <h1 id="top" class="animate__animated animate__jackInTheBox">
          FRONT-END DEV
        </h1>
      </STopWrapper>

      <SBottomWrapper>
        <h1 id="bottom" class="animate__animated animate__jackInTheBox">
          JIN JAEHWAN
        </h1>
        <h1 id="bottom" class="animate__animated animate__jackInTheBox">
          JIN JAEHWAN
        </h1>
      </SBottomWrapper>
    </SFirstWrapper>
  );
};

export default First;
