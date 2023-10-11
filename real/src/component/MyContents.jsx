import {
  SMyContentsWrapper,
  SSkillsWrapper,
  SSkillsDetailWrapper,
  SJavaScriptWrapper,
  SReactWrapper,
  SVueWrapper,
  STypeScriptWrapper,
  STitleWrapper,
} from "../style/SMyContents";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import { SNavWrapper, SHtwo, SHone, SIconWrapper } from "./../style/SNav";

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
      <SMyContentsWrapper>
        <STitleWrapper>
          <p id="myContent">새로운 </p>
          <p id="myContent">지식을 </p>
          <p id="myContent">탐구하는</p>
          <p id="myContent">개발자</p>
        </STitleWrapper>
        <SSkillsWrapper>
          <Swiper
            id="skills"
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {skills.map((skill) => {
              const skillWidth = `${skill.length * 30}px`;

              return (
                <SwiperSlide id="skill">
                  <p style={{ width: skillWidth }}>{skill}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SSkillsWrapper>

        <SSkillsDetailWrapper>
          <SJavaScriptWrapper>
            <h2>JavaScript</h2>
            <p>
              ES6+ 문법, 데이터 타입, 변수 스코프, 클로저, 비동기 프로그래밍
              패턴 등의 개념을 숙지하고 있습니다. <br />
              RESTful API에 대한 이해와 경험이 있습니다. 코드의 효율성과
              가독성을 높이는 데 집중하고 있습니다. <br />
              {/* 비동기 프로그래밍을 통해 외부 API와의 효율적인 데이터 통신을
            수행하고, 코드 최적화와 디버깅을 통해 애플리케이션의 성능과 신뢰성을
            높이는데 중점을 두고 있습니다. */}
            </p>
          </SJavaScriptWrapper>
          <STypeScriptWrapper>
            <h2>TypeScript</h2>
            <p>
              TypeScript를 사용해 프로젝트를 진행 한 경험이 있습니다.
              <br />
              TypeScript의 정적 타입 시스템과 JavaScript로부터 확장된 기능을
              이해하고 있습니다. <br />
            </p>
          </STypeScriptWrapper>
          <SReactWrapper>
            <h2>React</h2>
            <p>
              Redux, Redux Toolkit등의 상태관리 라이브러리를 사용한 경험이
              있습니다.
              <br />
              React의 컴포넌트 기반 아키텍처와 가상 DOM을 이해하며, 재사용
              가능한 UI를 구현하고 상태 관리에 중점을 두고 있습니다. <br />
            </p>
          </SReactWrapper>
          <SVueWrapper>
            <h2>Python, Vue</h2>
            <p>
              Python 및 Django를 사용하여 CRUD 기능을 갖춘 서비스를 구현 한
              경험이 있습니다.
              <br />
              Vue Router와 Vuex를 활용하여 라우팅 및 상태 관리를 다룬 경험이
              있습니다. <br />
            </p>
          </SVueWrapper>
        </SSkillsDetailWrapper>
        {/* <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo> */}
      </SMyContentsWrapper>
    </>
  );
};

export default MyContents;
