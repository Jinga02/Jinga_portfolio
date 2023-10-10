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
import { SNavWrapper, SHtwo, SHone, SIconWrapper } from "./../style/SNav";
const MyProjects = () => {
  return (
    <>
      <SNavWrapper>
        <SHtwo>
          <h2 id="dev">Frontend Developer</h2>
          <h2 id="dev">Frontend Developer</h2>
        </SHtwo>
        <SHone>
          <h1 id="name">Jin JaeHwan</h1>
          <h1 id="name">Jin JaeHwan</h1>
        </SHone>
        <SIconWrapper>
          <a href="https://github.com/Jinga02" target="_blank">
            <img
              src="https://github.com/Jinga02/MoviePjt/assets/110621233/a4549039-2711-44cd-8892-867b0f224618"
              alt="깃허브 아이콘"
            />
          </a>
          <a href="https://velog.io/@jjh099" target="_blank">
            <img
              src="https://github.com/Jinga02/MoviePjt/assets/110621233/b4867016-cb2b-41c2-9505-1ecbb3453c6f"
              alt="벨로그 아이콘"
            />
          </a>
          <a
            href="https://www.notion.so/70eb47d3871a4050bc32d4a4d895a1d1?pvs=4"
            target="_blank"
          >
            <img
              src="https://imghub.insilicogen.com/media/photos/lbj_notion_0.png"
              alt="노션 아이콘"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=jjh099@icloud.com"
            target="_blank"
          >
            <img
              src="https://github.com/Jinga02/MoviePjt/assets/110621233/17121056-dbd5-4843-ac68-0f27a5358e83"
              alt="메일"
            />
          </a>
        </SIconWrapper>
      </SNavWrapper>
      <SMyProjectsWrapper>
        <STitleWrapper>
          <p id="myProject">새로운</p>
          <p id="myProject">도전을</p>
          <p id="myProject">두려워하지 않는</p>
          <p id="myProject">개발자</p>
        </STitleWrapper>
        <SSwiper
          effect={"cards"}
          grabCursor={true}
          // pagination={true}
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
                src="https://github.com/Nubi0/Nubio/assets/110621233/f041f031-3842-4637-8a85-c47dffa5c081"
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
                영화추천 <b>BoemNe</b> 🎬
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
    </>
  );
};

export default MyProjects;
