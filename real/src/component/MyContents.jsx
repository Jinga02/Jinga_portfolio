import {
  SMyContentsWrapper,
  SSkillsWrapper,
  SSkillsDetailWrapper,
  SJavaScriptWrapper,
  SReactWrapper,
  SVueWrapper,
  SHtmlScriptWrapper,
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
            href="https://dent-edam-42d.notion.site/70eb47d3871a4050bc32d4a4d895a1d1?pvs=4"
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
              - ES6+ 문법에 익숙합니다. <br />
              - TypeScript를 사용할 수 있습니다. <br />
              - Jest를 활용한 테스트코드 작성 경험이 있습니다. <br />- REST
              API에 대한 이해와 경험이 있으며, RESTful을 지향합니다. <br />
            </p>
          </SJavaScriptWrapper>
          <SReactWrapper>
            <h2>React</h2>
            <p>
              - 컴포넌트 기반 아키텍처를 이해하고, React Hooks를 활용할 수
              있습니다.
              <br />
              - Redux, Redux Toolkit, react-query를 이해하고 사용하고 있습니다.
              <br />- styled-component 이해하고 사용하고 있습니다.
            </p>
          </SReactWrapper>
          <SHtmlScriptWrapper>
            <h2>HTML/CSS</h2>
            <p>
              - 웹 페이지의 작동 구조와 DOM을 이해하고 있습니다.
              <br />
              - 웹표준을 이해하고 있으며, 지키기 위해 노력합니다. <br />- 사용자
              중심의 디자인 원칙을 준수하고, 브랜드 메시지와 사용자 경험을
              강화하기 위한 시각적 요소를 지속적으로 개선합니다.
            </p>
          </SHtmlScriptWrapper>
          <SVueWrapper>
            <h2>Python, Vue</h2>
            <p>
              - Python, Django를 사용하여 CRUD 기능을 갖춘 서비스를 구현 한
              경험이 있습니다.
              <br />
              - Vue Router와 Vuex를 활용하여 라우팅 및 상태 관리를 다룬 경험이
              있습니다. <br />
            </p>
          </SVueWrapper>
        </SSkillsDetailWrapper>
      </SMyContentsWrapper>
    </>
  );
};

export default MyContents;
