import React from "react";
import First from "./component/First";
import MyContents from "./component/MyContents";
import MyProjects from "./component/MyProjects";
import WhoAmI from "./component/WhoAmI";
import { SBodyWrapper } from "./style/SApp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation } from "swiper/modules";
import Nav from "./component/Nav";

import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function App() {
  return (
    <SBodyWrapper>
      <Swiper
        effect={"cube"}
        grabCursor={false}
        pagination={true}
        navigation={true}
        speed={1000}
        touchRatio={0}
        modules={[EffectCube, Pagination, Navigation]}
      >
        <SwiperSlide>
          <First />
        </SwiperSlide>
        <SwiperSlide>
          <Nav />
          <WhoAmI />
        </SwiperSlide>
        <SwiperSlide>
          <Nav />
          <MyContents />
        </SwiperSlide>
        <SwiperSlide>
          <Nav />
          <MyProjects />
        </SwiperSlide>
      </Swiper>
    </SBodyWrapper>
  );
}

export default App;
