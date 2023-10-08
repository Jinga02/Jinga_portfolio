import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import { Mousewheel, Pagination } from "swiper/modules";
import First from "./component/First";
import WhoAmI from "./component/WhoAmI";
import Nav from "./component/Nav";
import MyContents from "./component/MyContents";
import MyProjects from "./component/MyProjects";

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
        <SwiperSlide className="three">
          <Nav />
          <MyContents />
        </SwiperSlide>
        <SwiperSlide className="four">
          <Nav />
          <MyProjects />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
