// App.js

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import { Mousewheel } from "swiper/modules";
import First from "./component/First";
import WhoAmI from "./component/WhoAmI";
import Nav from "./component/Nav";
import MyContents from "./component/MyContents";
import MyProjects from "./component/MyProjects";

export default function App() {
  const [isNavHidden, setIsNavHidden] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    if (currentIndex === 0) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  };

  return (
    <>
      {isNavHidden ? null : <Nav />}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        speed={1200}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        <SwiperSlide className="one">
          <First />
        </SwiperSlide>
        <SwiperSlide className="two">
          <WhoAmI />
        </SwiperSlide>
        <SwiperSlide className="three">
          <MyContents />
        </SwiperSlide>
        <SwiperSlide className="four">
          <MyProjects />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
