import { STitleWrapper } from "../style/SMyProjects";
import { SWhoAmIWrapper } from "../style/SWhoAmI";

const WhoAmI = () => (
  <SWhoAmIWrapper>
    <STitleWrapper>
      <h1 id="whoAmI">함께가치</h1>
      <h1 id="whoAmI">소통을 </h1>
      <h1 id="whoAmI">중요시하는</h1>
      <h1 id="whoAmI">개발자</h1>
    </STitleWrapper>
    <p id="Introduce">
      <span id="frontend">
        폭넓은 지식보다는 깊은 이해를 추구하는 프론트엔드 개발자
      </span>
      <br />
      <br />
      <span id="newChallenge"> 새로운 도전</span>
      <span id="teamWork">협업 능력 향상</span>
      <span id="clean">클린 코드</span>
      <span id="growth">개발자로서의 성장을</span>
      <br /> <br />이 모든 가치를 함께 지켜나가며 발전하는 모습을
      보여드리겠습니다
    </p>
  </SWhoAmIWrapper>
);
export default WhoAmI;
