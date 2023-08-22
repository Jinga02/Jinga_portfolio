import React from "react";

import { SFirstWrapper, SVideo } from "../style/SFirst";
import video from "../background.mp4";

const First = () => {
  return (
    <SFirstWrapper>
      <h1>새로운 지식을</h1>
      <h1>탐구하는 개발자</h1>
      <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo>
    </SFirstWrapper>
  );
};

export default First;
