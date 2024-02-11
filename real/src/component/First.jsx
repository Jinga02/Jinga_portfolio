import React from "react";
import style from "../style/First.module.css";

const First = () => {
  return (
    <div className={style.wrap}>
      <div className={style.top}>
        <h1
          id="top"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          Welcome to my portfolio
        </h1>
        <h1
          id="top"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          Welcome to my portfolio
        </h1>
      </div>
      <div className={style.mid}>
        <h1
          id="mid"
          class="animate__animated animate__fadeInRight animate__slow "
        >
          FRONT-END DEV
        </h1>
        <h1
          id="mid"
          class="animate__animated animate__fadeInLeft animate__slow "
        >
          FRONT-END DEV
        </h1>
      </div>
      <div className={style.bottom}>
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
      </div>
    </div>
  );
};

export default First;
