import {
  SMyProjectsWrapper,
  SProjectVideo,
  SMovieTitle,
  SMovieText,
  SCritTitle,
  SCritText,
  STitleWrapper,
  SSwiper,
  SSwiperSlide,
} from "../style/SMyProjects";
import MovieVideo from "../asset/movie.mp4";
import CritVideo from "../asset/crit.mp4";
import { EffectCards } from "swiper/modules";

import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
const MyProjects = () => {
  return (
    <SMyProjectsWrapper>
      <STitleWrapper>
        <h1 id="myProject">도전을</h1>
        <h1 id="myProject">두려워하지 않고</h1>
        <h1 id="myProject">즐기는 개발자</h1>
      </STitleWrapper>
      <SSwiper
        effect={"cards"}
        grabCursor={true}
        pagination={true}
        speed={500}
        modules={[EffectCards]}
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
          </SMovieTitle>
          <SMovieText>
            <SProjectVideo autoPlay loop muted type="video/mp4">
              <source src={MovieVideo} type="video/mp4" />
            </SProjectVideo>
            {/* <p id="movieText">
              <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
              <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
              <img src="https://img.shields.io/badge/python-3776AB?style=flat&logo=python&logoColor=white" />
              <img src="https://img.shields.io/badge/django-092E20?style=flat&logo=django&logoColor=white" />
              <br />
              사용자의 관심영화를 기반의 영화 추천 서비스 <br />
              <br />
              TMDB API를 활용한 영화정보 파싱 <br />
              <br />
              Backend, Frontend를 모두 경험한 단독 프로젝트
              <br />
              Swiper
            </p> */}
          </SMovieText>
        </SSwiperSlide>
        <SSwiperSlide>
          <SCritTitle>
            <h2>
              실시간 챌린지 <b>CRIT</b> 🎖️
            </h2>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
            <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
            <img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white" />
          </SCritTitle>
          <SCritText>
            <SProjectVideo autoPlay loop muted type="video/mp4">
              <source src={CritVideo} type="video/mp4" />
            </SProjectVideo>
            {/* <p id="movieText">
              <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
              <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
              <img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white" />
              <br />
              함께 성장하는 실시간 챌린지 서비스
              <br />
              JWT토큰을 활용한 유저인증
              <br />
              OpenVidu와 teachable machine 활용한 AI실시간인증 <br />
            </p> */}
          </SCritText>
        </SSwiperSlide>
      </SSwiper>
      {/* <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo> */}
    </SMyProjectsWrapper>
  );
};

export default MyProjects;
