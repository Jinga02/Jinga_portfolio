import React from "react";
import First from "./component/First";
import MyContents from "./component/MyContents";
import MyProjects from "./component/MyProjects";
import WhoAmI from "./component/WhoAmI";
import { SBodyWrapper, SBottomVideo } from "./style/SApp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import Nav from "./component/Nav";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import MovieVideo from "./asset/rain.mp4";

function App() {
  return (
    <SBodyWrapper>
      <Nav />
      {/* <SBottomVideo autoPlay loop muted type="video/mp4">
        <source src={MovieVideo} type="video/mp4" />
      </SBottomVideo> */}
      <Swiper
        effect={"cube"}
        grabCursor={true}
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
          <WhoAmI />
        </SwiperSlide>
        <SwiperSlide>
          <MyContents />
        </SwiperSlide>
        <SwiperSlide>
          <MyProjects />
        </SwiperSlide>
      </Swiper>
    </SBodyWrapper>
  );
}

export default App;
