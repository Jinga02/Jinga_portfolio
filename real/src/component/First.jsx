import React from "react";
import {
  SFirstWrapper,
  STopWrapper,
  SBottomWrapper,
  TypingWrapper,
} from "../style/SFirst";

const First = () => {
  // const htmlContent = `
  //   <p>const userName = "진재환"; <br/>
  //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function displayWelcomeMessage(name) {<br/>
  //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const message = 환영합니다, \${userName}의 포트폴리오 입니다;<br/>
  //   console.log(message);<br/>
  //   }</p>
  // `;
  const htmlContent = `
  안녕하세요. : )<br/>
  조화를 이뤄가는 과정과 성취를 즐기는 개발자,<br/>
  진재환의 포트폴리오 사이트입니다
  방문해주셔서 감사합니다.
  `;

  return (
    <SFirstWrapper>
      <STopWrapper>
        <h1 id="top">FRONT-END DEV</h1>
        <h1 id="top">FRONT-END DEV</h1>
      </STopWrapper>
      <TypingWrapper className="wrapper">
        <div
          className="typing-demo"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </TypingWrapper>
      <SBottomWrapper>
        <h1 id="bottom">JIN JAEHWAN</h1>
        <h1 id="bottom">JIN JAEHWAN</h1>
      </SBottomWrapper>
    </SFirstWrapper>
  );
};

export default First;
