import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import { Mousewheel, Pagination } from "swiper/modules";
import First from "./component/First";
import WhoAmI from "./component/WhoAmI";
import Nav from "./component/Nav";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        speed={1200}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide className="one">
          <First />
        </SwiperSlide>
        <SwiperSlide className="two">
          <Nav />
          <WhoAmI />
        </SwiperSlide>
        <SwiperSlide className="three">Slide 3</SwiperSlide>
        <SwiperSlide className="four">Slide 4</SwiperSlide>
        <SwiperSlide className="five">Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
