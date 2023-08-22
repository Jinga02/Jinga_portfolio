import { SWhoAmIWrapper, SContactsWrapper } from "../style/SWhoAmI";

const WhoAmI = () => {
  return (
    <SWhoAmIWrapper>
      <h1>도전을</h1>
      <h1>두려워하지 않고</h1>
      <h1>즐기는 개발자</h1>
      <SContactsWrapper>
        <p id="skills">
          JavaScript, TypeScript, React, Vue.js, Pwa, Redux, Recoil, Html, css,
          Python, Django
        </p>
        <p id="ssafy">
          2023.01 ~ 2023.06 SSAFY 1학기 수료 <br />
          2023.06 ~ SSAFY 2학기 진행중
        </p>
        <p id="Introduce">
          <span class="Page2__Bold-sc-113b8ll-3 ieOPZb"> Frontend </span> 개발을
          심도 있게 탐구하고자 노력하는 주니어 개발자입니다. <br />
          <span class="Page2__Bold-sc-113b8ll-3 ieOPZb"> 새로운 도전</span>을
          두려워하지 않고, 다양한 언어와 스킬을 익히며 실력을 키우는 데 집중하고
          있습니다. <br />
          <span class="Page2__Bold-sc-113b8ll-3 ieOPZb">협업 능력 향상</span>을
          위해, 팀원들과 소통을 우선시하며 다양한 프로젝트 경험을 쌓으며, <br />
          <span class="Page2__Bold-sc-113b8ll-3 ieOPZb">개발자로서의 성장</span>
          을 끊임없이 추구하고 있습니다.
        </p>
      </SContactsWrapper>
    </SWhoAmIWrapper>
  );
};
export default WhoAmI;
