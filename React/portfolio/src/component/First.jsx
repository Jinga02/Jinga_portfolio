import React from "react";

import { SFirstWrapper, SVideo } from "../style/SFirst";
import video from "../asset/background.mp4";

const First = () => {
  return (
    <SFirstWrapper>
      <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo>
    </SFirstWrapper>
  );
};

export default First;
