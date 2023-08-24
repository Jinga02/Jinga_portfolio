import {
  SMovieWrapper,
  SMyProjectsWrapper,
  SCritWrapper,
  SProjectVideo,
  SMovieTitle,
  SMovieText,
  SCritTitle,
  SCritText,
  SProjectWrapper,
  STitleWrapper,
} from "../style/SMyProjects";
import MovieVideo from "../asset/movie.mp4";
import { SVideo } from "../style/SFirst";
import video from "../asset/space.mp4";
import CritVideo from "../asset/crit.mp4";
const MyProjects = () => {
  return (
    <SMyProjectsWrapper>
      <STitleWrapper>
        <h1 id="title">도전을</h1>
        <h1 id="title">두려워하지 않고</h1>
        <h1 id="title">즐기는 개발자</h1>
      </STitleWrapper>
      <SProjectWrapper>
        <SMovieWrapper>
          <SMovieTitle>
            <h2>
              영화추천 사이트 <b>BoemNe</b> 🎬
            </h2>
          </SMovieTitle>
          <SMovieText>
            <SProjectVideo autoPlay loop muted type="video/mp4">
              <source src={MovieVideo} type="video/mp4" />
            </SProjectVideo>
            <p id="movieText">
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
            </p>
          </SMovieText>
        </SMovieWrapper>
        <SCritWrapper>
          <SCritTitle>
            <h2>
              실시간 챌린지 <b>CRIT</b> 🎖️
            </h2>
          </SCritTitle>
          <SCritText>
            <SProjectVideo autoPlay loop muted type="video/mp4">
              <source src={CritVideo} type="video/mp4" />
            </SProjectVideo>
            <p id="movieText">
              <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
              <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
              <img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white" />
              <br />
              함께 성장하는 실시간 챌린지 서비스
              <br />
              <br />
              JWT토큰을 활용한 유저인증
              <br />
              <br />
              OpenVidu와 teachable machine 활용한 AI실시간인증 <br />
            </p>
          </SCritText>
        </SCritWrapper>
      </SProjectWrapper>
      {/* <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo> */}
    </SMyProjectsWrapper>
  );
};

export default MyProjects;
