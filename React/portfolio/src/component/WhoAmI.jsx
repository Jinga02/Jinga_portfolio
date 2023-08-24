import { SWhoAmIWrapper, SContactsWrapper } from "../style/SWhoAmI";

const WhoAmI = () => {
  return (
    <SWhoAmIWrapper>
      <h1 id="title">함께가치</h1>
      <h1 id="title">소통을 </h1>
      <h1 id="title">중요시하는</h1>
      <h1 id="title">개발자</h1>
      <p id="Introduce">
        <span id="frontend"> Frontend </span> 개발을 심도 있게 탐구하고자
        노력하는 주니어 개발자입니다. <br />
        <br />
        <span id="newChallenge"> 새로운 도전</span>
        {/* 을
          두려워하지 않고, 다양한 언어와 스킬을 익히며 실력을 키우는 데 집중하고
          있습니다. <br /> */}
        <span id="teamWork">협업 능력 향상</span>
        {/* 을
          위해, 팀원들과 소통을 우선시하며 다양한 프로젝트 경험을 쌓으며, <br /> */}
        <span id="growth">개발자로서의 성장을</span>
        <br /> <br />
        끊임없이 추구하고 있습니다.
        <br />
        <br /> Frontend뿐만 아니라 Backend에도 관심을 가지며
        <br />
        <br /> 분야를 가리지 않는 개발자가 되겠습니다.
      </p>
    </SWhoAmIWrapper>
  );
};
export default WhoAmI;
