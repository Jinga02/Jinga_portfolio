import {
  SMyProjectsWrapper,
  SProjectVideo,
  SMovieTitle,
  SCritTitle,
  STitleWrapper,
  SSwiper,
  SSwiperSlide,
} from "../style/SMyProjects";
// import MovieVideo from "../asset/movie.mp4";
// import CritVideo from "../asset/crit.mp4";
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
          <SMovieTitle>
            <h2>
              영화추천 사이트 <b>BoemNe</b> 🎬
            </h2>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
            <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
            <img src="https://img.shields.io/badge/python-3776AB?style=flat&logo=python&logoColor=white" />
            <img src="https://img.shields.io/badge/django-092E20?style=flat&logo=django&logoColor=white" />
            <a href="https://github.com/Jinga02/MoviePjt" target="_blank">
              <img
                id="readMore"
                src="https://github.com/Jinga02/MoviePjt/assets/110621233/66318162-3f56-4dba-9129-a42303f26c0b"
              />
            </a>
          </SMovieTitle>

          <SProjectVideo autoPlay loop muted type="video/mp4">
            {/* <source src={MovieVideo} type="video/mp4" /> */}
          </SProjectVideo>
        </SSwiperSlide>
        <SSwiperSlide>
          <SCritTitle>
            <h2>
              실시간 챌린지 <b>CRIT</b> 🎖️
            </h2>

            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
            <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
            <img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white" />
            <a href="https://github.com/Jinga02/ChallengePJT" target="_blank">
              <img
                id="readMore"
                src="https://github.com/Jinga02/MoviePjt/assets/110621233/66318162-3f56-4dba-9129-a42303f26c0b"
              />
            </a>
          </SCritTitle>
          <SProjectVideo autoPlay loop muted type="video/mp4">
            {/* <source src={CritVideo} type="video/mp4" /> */}
          </SProjectVideo>
        </SSwiperSlide>
      </SSwiper>
    </SMyProjectsWrapper>
  );
};

export default MyProjects;
