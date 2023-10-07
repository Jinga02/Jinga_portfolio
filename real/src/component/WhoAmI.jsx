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
      <span id="frontend">
        폭넓은 지식보다는 깊은 이해를 추구하는 프론트엔드 개발자
      </span>
      <br />
      <br />
      <div class="container">
        <span class="typewriter"> 새로운 도전</span>
        <span class="typewriter">협업 능력 향상</span>
        <span class="typewriter">클린 코드</span>
        <span class="typewriter">개발자로서의 성장</span>
      </div>
      <br />이 모든 가치를 함께 지켜나가며 발전하는 모습을 보여드리겠습니다
    </p>
  </SWhoAmIWrapper>
);
export default WhoAmI;
