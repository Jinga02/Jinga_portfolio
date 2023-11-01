import { SWhoAmIWrapper, SContentWrapper } from "../style/SWhoAmI";
import { SHone, SHtwo, SIconWrapper, SNavWrapper } from "./../style/SNav";

const WhoAmI = () => {
  const Content = `
    사용자 경험 협업적 문제 해결유지보수 클린코드
  `;
  const ContentTwo = `
  새로운것에 대한 호기심과 도전의식
`;
  const profileImg = process.env.PUBLIC_URL + "/assets/profile.png";
  return (
    <>
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
      <SWhoAmIWrapper>
        <SContentWrapper>
          <div id="textOne">
            <div id="icon">
              <img src="https://github.com/Nubi0/Nubio/assets/110621233/aefaca6a-97b3-4e21-a33e-73bb4a4ba542" />
            </div>
            <div id="myInfo">
              <p>안녕하세요. 주니어 개발자 진재환입니다.</p>
              <p>
                <span id="deep" class="animate__animated animate__pulse">
                  "기초가 튼튼하면 길이 열린다."
                </span>
                라는 말을 항상 마음에 새기고 있습니다.
              </p>
              <p>
                다양하고 넓은 기술도 중요하지만,{" "}
                <span id="deep" class="animate__animated animate__pulse">
                  깊이있는 프론트엔드 개발자
                </span>
                가 되기 위해 노력하고 있습니다.
              </p>
              <p>
                <span id="simple" class="animate__animated animate__pulse">
                  "Simple is best"
                </span>{" "}
                라는 철학을 고수합니다.
              </p>
              <p>
                UI/UX, 코드, 디자인 모두 간단하면서 효과적인게 가장 중요하다고
                생각합니다.
              </p>
              <p>
                개발 외에도 등산과 캠핑, 운동, 뮤지컬 등 다양한 취미를 즐기며
                새로운 경험과 아이디어를 얻고 있습니다.
              </p>
              <p>
                함께 일하게 되면 팀의 목표 달성을 위해 열정적으로 노력하고, 함께
                성장하는 과정을 즐길 수 있는 동료가 되고 싶습니다.
              </p>
            </div>
          </div>
          <div id="textTwo">
            <div className="wrapper">
              <p id="content">{Content}</p>
              <p id="contentTwo">{ContentTwo}</p>
            </div>
            <p id="textBottom">
              이 모든 가치를 함께 지켜나가며 발전하는 모습을 보여드리겠습니다.
            </p>
          </div>
        </SContentWrapper>
      </SWhoAmIWrapper>
    </>
  );
};
export default WhoAmI;
