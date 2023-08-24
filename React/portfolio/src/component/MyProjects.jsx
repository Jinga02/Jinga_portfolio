import { useState } from "react";
import {
  SMovieWrapper,
  SMyProjectsWrapper,
  SCritWrapper,
  SProjectVideo,
} from "../style/SMyProjects";
import video from "../asset/movie.mp4";
const MyProjects = () => {
  const [checkHover, setCheckHover] = useState(false);
  const leaveProject = () => {
    setCheckHover(false);
  };
  const enterProject = () => {
    setCheckHover(true);
  };
  return (
    <SMyProjectsWrapper>
      <h1 id="title">도전을</h1>
      <h1 id="title">두려워하지 않고</h1>
      <h1 id="title">즐기는 개발자</h1>

      <SMovieWrapper onMouseEnter={enterProject} onMouseLeave={leaveProject}>
        {checkHover ? (
          <>
            <h2>영화추천 사이트</h2>
            <p id="movieText">
              사용자의 관심영화를 기반으로 관심을 가질만한 영화를 추천해주는
              사이트🎬
              <br />
              JavaScript, React, Python, Django <br />
              TMDB API를 활용한 영화정보 파싱 <br />
              Backend, Frontend를 모두 경험한 프로젝트
            </p>
          </>
        ) : (
          <>
            <h2>영화추천 사이트</h2>
            <p id="movieText">
              사용자의 관심영화를 기반으로 관심을 가질만한 영화를 추천해주는
              사이트🎬
            </p>
            <SProjectVideo
              autoPlay
              loop
              muted
              className="video"
              type="video/mp4"
            >
              <source src={video} type="video/mp4" />
            </SProjectVideo>
          </>
        )}
      </SMovieWrapper>
      <SCritWrapper></SCritWrapper>
    </SMyProjectsWrapper>
  );
};

export default MyProjects;
