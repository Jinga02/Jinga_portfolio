import { STitleWrapper } from "../style/SMyProjects";
import { SWhoAmIWrapper } from "../style/SWhoAmI";
import { SVideo } from "../style/SFirst";
import video from "../asset/space.mp4";
const WhoAmI = () => {
  return (
    <SWhoAmIWrapper>
      <STitleWrapper>
        <h1 id="title">함께가치</h1>
        <h1 id="title">소통을 </h1>
        <h1 id="title">중요시하는</h1>
        <h1 id="title">개발자</h1>
      </STitleWrapper>
      <p id="Introduce">
        <span id="frontend"> Frontend </span> 개발을 심도 있게 탐구하고자
        노력하는 주니어 개발자입니다. <br />
        <br />
        <span id="newChallenge"> 새로운 도전</span>
        <span id="teamWork">협업 능력 향상</span>
        <span id="refactoring">재사용성과 유지보수성</span>
        <span id="clean">클린 코드</span>
        <span id="growth">개발자로서의 성장을</span>
        <br /> <br />
        끊임없이 추구하고 있습니다.
        <br />
        <br /> Frontend뿐만 아니라 Backend에도 관심을 가지며
        <br />
        <br /> 분야를 가리지 않는 개발자가 되겠습니다.
      </p>
      {/* <SVideo autoPlay loop muted className="video" type="video/mp4">
        <source src={video} type="video/mp4" />
      </SVideo> */}
    </SWhoAmIWrapper>
  );
};
export default WhoAmI;
