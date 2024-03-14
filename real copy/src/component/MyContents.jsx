import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import Nav from "./Nav";
import style from "../style/MyContents.module.css";

const MyContents = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Redux",
    "Html",
    "css",
    "Python",
  ];
  return (
    <>
      {" "}
      <Nav />
      <div id={style.wrap}>
        <div className={style.title}>
          <p>새로운 </p>
          <p>지식을 </p>
          <p>탐구하는</p>
          <p>개발자</p>
        </div>

        <Swiper
          id={style.skills}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
        >
          {skills.map((skill) => {
            const skillWidth = `${skill.length * 30}px`;

            return (
              <SwiperSlide id={style.skill}>
                <p style={{ width: skillWidth }}>{skill}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={style.detailSkills}>
          <div className={style.javascript}>
            <h2>JavaScript</h2>
            <p>
              - ES6+ 문법에 익숙합니다. <br />
              - TypeScript를 사용할 수 있습니다. <br />
              - Jest를 활용한 테스트코드 작성 경험이 있습니다. <br />- REST
              API에 대한 이해와 경험이 있으며, RESTful을 지향합니다. <br />
            </p>
          </div>
          <div className={style.react}>
            <h2>React</h2>
            <p>
              - 컴포넌트 기반 아키텍처를 이해하고, React Hooks를 활용할 수
              있습니다.
              <br />
              - Redux, Redux Toolkit, react-query를 이해하고 사용하고 있습니다.
              <br />- styled-component, tailwind를 이해하고 사용하고 있습니다.
            </p>
          </div>
          <div className={style.html}>
            <h2>HTML/CSS</h2>
            <p>
              - 웹 페이지의 작동 구조와 DOM을 이해하고 있습니다.
              <br />
              - 웹표준을 이해하고 있으며, 지키기 위해 노력합니다. <br />- 사용자
              중심의 디자인 원칙을 준수하고, 브랜드 메시지와 사용자 경험을
              강화하기 위한 시각적 요소를 지속적으로 개선합니다.
            </p>
          </div>
          <div className={style.vue}>
            <h2>Python, Vue</h2>
            <p>
              - Python, Django를 사용하여 CRUD 기능을 갖춘 서비스를 구현 한
              경험이 있습니다.
              <br />
              - Vue Router와 Vuex를 활용하여 라우팅 및 상태 관리를 다룬 경험이
              있습니다. <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyContents;
