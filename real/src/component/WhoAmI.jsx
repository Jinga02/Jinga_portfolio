import { SWhoAmIWrapper, STitleWrapper } from "../style/SWhoAmI";

const WhoAmI = () => (
  <SWhoAmIWrapper>
    <STitleWrapper>
      <p id="whoAmI">함께가치</p>
      <p id="whoAmI">소통을 </p>
      <p id="whoAmI">중요시하는</p>
      <p id="whoAmI">개발자</p>
    </STitleWrapper>
    <p id="Introduce">
      <span id="frontend">조화를 이뤄가는 과정과 성취를 즐기는 개발자</span>
      <br />
      <br />
      <div class="container">
        <p class="typewriter">사용자 경험</p>
        <p class="typewriter">협업적 문제 해결</p>
        <p class="typewriter">유지보수 클린 코드</p>
      </div>
      <p class="final">새로운것에 대한 호기심과 도전의식</p>이 모든 가치를 함께
      지켜나가며 발전하는 모습을 보여드리겠습니다
    </p>
  </SWhoAmIWrapper>
);
export default WhoAmI;
