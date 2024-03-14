import Nav from "./Nav";
import style from "../style/WhoAmI.module.css";
const WhoAmI = () => {
  const Content = `
    사용자 경험 협업적 문제 해결 유지보수 클린코드
  `;
  const ContentTwo = `
  새로운것에 대한 호기심과 도전의식
`;

  return (
    <>
      <Nav />
      <div className={style.wrap}>
        <div className={style.contentWrap}>
          <div className={style.textOne}>
            <div className={style.icon}>
              <img src="https://github.com/Nubi0/Nubio/assets/110621233/aefaca6a-97b3-4e21-a33e-73bb4a4ba542" />
            </div>
            <div className={style.myInfo}>
              <p>안녕하세요. 주니어 개발자 진재환입니다.</p>
              <p>
                <span className={style.deep}>
                  "기초가 튼튼하면 길이 열린다."
                </span>
                라는 말을 항상 마음에 새기고 있습니다.
              </p>
              <p>
                다양하고 넓은 기술도 중요하지만,{" "}
                <span className={style.deep}>깊이있는 프론트엔드 개발자</span>가
                되기 위해 노력하고 있습니다.
              </p>
              <p>
                <span className={style.simple}>"Simple is best"</span> 라는
                철학을 고수합니다.
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
          <div className={style.textTwo}>
            <p className={style.content}>{Content}</p>
            <p className={style.contentTwo}>{ContentTwo}</p>
            <p className={style.textBottom}>
              이 모든 가치를 함께 지켜나가며 발전하는 모습을 보여드리겠습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhoAmI;
