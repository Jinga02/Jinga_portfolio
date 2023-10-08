import {
  SMyProjectsWrapper,
  SProjectVideo,
  SMovieTitle,
  SCritTitle,
  STitleWrapper,
  SSwiper,
  SSwiperSlide,
} from "../style/SMyProjects";
import { EffectCards, Pagination, Navigation } from "swiper/modules";

import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
const MyProjects = () => {
  return (
    <SMyProjectsWrapper>
      <STitleWrapper>
        <p id="myProject">도전을</p>
        <p id="myProject">두려워하지 않고</p>
        <p id="myProject">즐기는 개발자</p>
      </STitleWrapper>
      <SSwiper
        effect={"cards"}
        grabCursor={true}
        pagination={true}
        // navigation={true}
        speed={500}
        modules={[EffectCards, Pagination, Navigation]}
      >
        <SSwiperSlide>
          <SCritTitle>
            <h2>
              안심 보행 서비스 <b>NUBIO👨‍👩‍👦‍👦</b>
            </h2>
            <p>TypeScript</p>
            <p>React</p>
            <p>Redux</p>
            <a href="https://github.com/Nubi0/Nubio" target="_blank">
            Read More
            </a>
          </SCritTitle>
          <SProjectVideo autoPlay loop muted type="video/mp4">
            <source
              src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/309c4ca3-766f-4ed1-a950-4d2779f98605"
              type="video/mp4"
            />
          </SProjectVideo>
        </SSwiperSlide>
        <SSwiperSlide>
          <SCritTitle>
            <h2>
              실시간 챌린지 <b>CRIT</b> 🎖️
            </h2>
            <p>JavaScript</p>
            <p>React</p>
            <p>Redux</p>
            <a href="https://github.com/Nubi0/Nubio" target="_blank">
            Read More
            </a>
          </SCritTitle>
          <SProjectVideo autoPlay loop muted type="video/mp4">
            <source
              src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/309c4ca3-766f-4ed1-a950-4d2779f98605"
              type="video/mp4"
            />
          </SProjectVideo>
        </SSwiperSlide>
        <SSwiperSlide>
          <SMovieTitle>
            <h2>
              영화추천 사이트 <b>BoemNe</b> 🎬
            </h2>
            <p>JavaScript</p>
            <p>React</p>
            <p>Python</p>
            <p>Django</p>
            <a href="https://github.com/Nubi0/Nubio" target="_blank">
            Read More
            </a>
          </SMovieTitle>

          <SProjectVideo autoPlay loop muted type="video/mp4">
            <source
              src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/a8de7b9a-2322-46fd-b305-539b63136b5b"
              type="video/mp4"
            />
          </SProjectVideo>
        </SSwiperSlide>
      </SSwiper>
    </SMyProjectsWrapper>
  );
};

export default MyProjects;
