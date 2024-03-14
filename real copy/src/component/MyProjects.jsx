import { EffectCards, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Nav from "./Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../style/MyProjects.module.css";
const MyProjects = () => {
  return (
    <>
      <Nav />
      <div id="wrap">
        <div className={style.title}>
          <p>도전을</p>
          <p>두려워</p>
          <p>하지 않는</p>
          <p>개발자</p>
        </div>
        <Swiper
          className={style.swiper}
          effect={"cards"}
          grabCursor={true}
          speed={500}
          modules={[EffectCards, Pagination, Navigation]}
        >
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.swiperHeader}>
              <div className={style.titleWrap}>
                <h2>
                  안심 보행 서비스 <b>NUBIO👨‍👩‍👦‍👦</b>
                </h2>
              </div>
              <div className={style.linkWrap}>
                <p>TypeScript</p>
                <p>React</p>
                <p>Redux</p>
                <a href="https://github.com/Nubi0/Nubio" target="_blank">
                  Read More
                </a>
                <img
                  src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/4b6e63bc-b7ac-47ce-91ae-74aad42242f8"
                  alt="마우스"
                />
              </div>
            </div>
            <video autoPlay loop muted type="video/mp4">
              <source
                src="https://github.com/Nubi0/Nubio/assets/110621233/f041f031-3842-4637-8a85-c47dffa5c081"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.swiperHeader}>
              <div className={style.titleWrap}>
                <h2>
                  실시간 챌린지 <b>CRIT</b> 🎖️
                </h2>
              </div>
              <div className={style.linkWrap}>
                <p>JavaScript</p>
                <p>React</p>
                <p>Redux</p>
                <a
                  href="https://github.com/Jinga02/ChallengePJT"
                  target="_blank"
                >
                  Read More
                </a>
                <img
                  src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/4b6e63bc-b7ac-47ce-91ae-74aad42242f8"
                  alt="마우스"
                />
              </div>
            </div>
            <video autoPlay loop muted type="video/mp4">
              <source
                src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/309c4ca3-766f-4ed1-a950-4d2779f98605"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.swiperHeader}>
              <div className={style.titleWrap}>
                <h2>
                  영화추천 <b>BoemNe</b> 🎬
                </h2>
              </div>
              <div className={style.linkWrap}>
                <p>JavaScript</p>
                <p>React</p>
                <p>Python</p>
                <p>Django</p>
                <a href="https://github.com/Jinga02/MoviePjt" target="_blank">
                  Read More
                </a>
                <img
                  src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/4b6e63bc-b7ac-47ce-91ae-74aad42242f8"
                  alt="마우스"
                />
              </div>
            </div>

            <video autoPlay loop muted type="video/mp4">
              <source
                src="https://github.com/Jinga02/Jinga_portfolio/assets/110621233/a8de7b9a-2322-46fd-b305-539b63136b5b"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MyProjects;
