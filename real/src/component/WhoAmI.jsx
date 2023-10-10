import {
  SWhoAmIWrapper,
  STitleWrapper,
  SContentWrapper,
} from "../style/SWhoAmI";

const WhoAmI = () => {
  const Content = `
    사용자 경험 협업적 문제 해결유지보수 클린코드
  `;
  const ContentTwo = `
  새로운것에 대한 호기심과 도전의식
`;
  return (
    <SWhoAmIWrapper>
      {/* <STitleWrapper>
        <p id="whoAmI">함께가치</p>
        <p id="whoAmI">소통을 </p>
        <p id="whoAmI">중요시하는</p>
        <p id="whoAmI">개발자</p>
      </STitleWrapper> */}
      <SContentWrapper>
        <div id="icon">
          <img src="https://github.com/Nubi0/Nubio/assets/110621233/8e4f2a0c-cbdf-4a84-a890-80a93eb60594" />
        </div>
        <div id="myInfo">
          <p>안녕하세요. 주니어 개발자 진재환입니다.</p>
          <p>
            다양하고 넓은 기술도 중요하지만,{" "}
            <span id="deep">깊이있는 프론트엔드 개발자</span>가 되려고
            노력합니다.
            {/* 현재는 다양한 프론트엔드 기술과
            프레임워크를 학습하며, 사용자 중심의 웹 애플리케이션을 개발하는 것을
            목표로 하고 있습니다. */}
          </p>
          <p>
            <span id="simple">"Simple is best"</span> 라는 철학을 고수합니다.
            {/* 사용자들이 제품 또는 서비스를 쉽게 이해하고
            사용할 수 있도록 끊임없이 노력하고 있습니다. */}
          </p>
          <p>
            UI/UX, 코드, 디자인 모두 간단하면서 효과적이며 편리한 것이 가장
            중요하다고 생각합니다.
          </p>
          <p>
            개발 외에도 등산과 캠핑, 운동, 뮤지컬 등 다양한 취미를 즐기며 새로운
            경험과 아이디어를 얻고 있습니다. 함께 일하게 되면 팀의 목표 달성을
            위해 열정적으로 노력하고, 함께 성장하는 과정을 즐길 수 있는 동료가
            되고 싶습니다.
          </p>
        </div>
        <div id="text">
          <div className="wrapper">
            <p id="content">{Content}</p>
            <p id="contentTwo">{ContentTwo}</p>
          </div>
          <p id="textTwo">
            이 모든 가치를 함께 지켜나가며 발전하는 모습을 보여드리겠습니다.
          </p>
        </div>
      </SContentWrapper>
    </SWhoAmIWrapper>
  );
};
export default WhoAmI;
