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

const MyContents = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Redux",
    "Recoil",
    "Html",
    "css",
    "Python",
    "Django",
  ];
  return (
    <SMyContentsWrapper>
      <STitleWrapper>
        <h1 id="myContent">새로운 지식을</h1>
        <h1 id="myContent">탐구하는</h1>
        <h1 id="myContent">개발자</h1>
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
            return (
              <SwiperSlide id="skill">
                {skill}
                <hr style={{ width: `${skill.length * 30}px` }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SSkillsWrapper>
      <SSkillsDetailWrapper>
        <SJavaScriptWrapper>
          <h2>JavaScript</h2>
          <hr />
          <p>
            ES6+ 문법, 데이터 타입, 변수 스코프, 클로저, 비동기 프로그래밍 패턴
            등의 개념을 숙지하고 있습니다. <br />
            코드의 효율성과 가독성을 높이는 데 집중하고 있습니다. <br />
            {/* 비동기 프로그래밍을 통해 외부 API와의 효율적인 데이터 통신을
            수행하고, 코드 최적화와 디버깅을 통해 애플리케이션의 성능과 신뢰성을
            높이는데 중점을 두고 있습니다. */}
          </p>
        </SJavaScriptWrapper>
        <STypeScriptWrapper>
          <h2>TypeScript</h2>
          <hr />
          <p>
            TypeScript의 정적 타입 시스템과 JavaScript로부터 확장된 기능을
            이해하고 있습니다. <br />
            정적 타입 검사로 런타임 에러를 줄이고 코드 가독성을 높이며,
            인터페이스와 제네릭을 활용하여 유연하고 재사용 가능한 코드작성에
            집중하고 있습니다. <br />
            {/* 타입스크립트의 최신 기능과 커뮤니티 동향을 주시하여 발전된 개발
            경험을 쌓고자 노력하고 있습니다. */}
          </p>
        </STypeScriptWrapper>
        <SReactWrapper>
          <h2>React</h2>
          <hr />
          <p>
            redux, recoil 등의 상태관리 라이브러리를 사용한 경험이 있습니다.{" "}
            <br />
            React의 컴포넌트 기반 아키텍처와 가상 DOM을 이해하며, 재사용 가능한
            UI를 구현하고 상태 관리에 중점을 두고 있습니다. <br />
            {/* 컴포넌트 라이프사이클과 효율적인 상태 관리 패턴에 더 깊이 집중하고,
            최신 기술 동향을 주시하여 개발 생산성을 향상하고자 합니다. <br /> */}
          </p>
        </SReactWrapper>
        <SVueWrapper>
          <h2>Vue</h2>
          <hr />
          <p>
            Vue의 컴포넌트 기반 아키텍처와 반응성 데이터 관리를 이해하고
            있습니다. <br />
            Vue Router와 Vuex를 활용하여 라우팅 및 상태 관리를 다룬 경험이
            있습니다. <br />
            {/* 현재는 React를 활용해 개발을 하고 있지만, Vue의 내부 동작과 최적화
            전략에 대해 깊이 공부하여 Vue를 활용한 혁신적인 프로젝트도
            개발하고자 합니다. */}
          </p>
        </SVueWrapper>
      </SSkillsDetailWrapper>
      {/* <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo> */}
    </SMyContentsWrapper>
  );
};

export default MyContents;
