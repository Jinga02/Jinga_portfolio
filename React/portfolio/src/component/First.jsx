import React from "react";
import { SFirstWrapper, SVideo } from "../style/SFirst";
import video from "../asset/space.mp4";
import { STitleWrapper } from "../style/SFirst";

const First = () => {
  return (
    <SFirstWrapper>
      <STitleWrapper>
        {/* <h1 id="title">Frontend개발자 진재환의</h1>
        <h1 id="title">개발 세계 탐험기</h1> */}
      </STitleWrapper>
      {/* <img
        src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/7d39199a-57d0-450c-9bbe-e75ffd848d2c"
        alt=""
      /> */}
      {/* <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo> */}
    </SFirstWrapper>
  );
};

export default First;
