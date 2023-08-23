import { SMyContentsWrapper, SContentsWrapper } from "../style/SMyContents";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";

const MyContents = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Pwa",
    "Redux",
    "Recoil",
    "Html",
    "css",
    "Python",
    "Django",
  ];
  return (
    <SMyContentsWrapper>
      <h1>새로운 지식을</h1>
      <h1>탐구하는</h1>
      <h1>개발자</h1>
      <SContentsWrapper>
        <Swiper
          id="skills"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
        >
          {skills.map((skill) => {
            return <SwiperSlide id="skill">{skill}</SwiperSlide>;
          })}
        </Swiper>
        <p id="skills"></p>
        <p id="ssafy">
          <b>SSAFY</b> <br />
          2023.01 ~ 2023.06 1학기 수료 <br />
          2023.06 ~ SSAFY 2학기 진행중
        </p>
      </SContentsWrapper>
    </SMyContentsWrapper>
  );
};

export default MyContents;
