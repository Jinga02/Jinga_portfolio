import React from "react";
import {
  SFirstWrapper,
  STopWrapper,
  SBottomWrapper,
  SMidWrapper,
} from "../style/SFirst";

const First = () => {
  return (
    <SFirstWrapper>
      <SMidWrapper>
        <h1
          id="mid"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          Welcome to my portfolio
        </h1>
        <h1
          id="mid"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          Welcome to my portfolio
        </h1>
      </SMidWrapper>
      <STopWrapper>
        <h1
          id="top"
          class="animate__animated animate__fadeInRight animate__slow "
        >
          FRONT-END DEV
        </h1>
        <h1
          id="top"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          FRONT-END DEV
        </h1>
      </STopWrapper>

      <SBottomWrapper>
        <h1
          id="bottom"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          JIN JAEHWAN
        </h1>
        <h1
          id="bottom"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          JIN JAEHWAN
        </h1>
      </SBottomWrapper>
    </SFirstWrapper>
  );
};

export default First;
