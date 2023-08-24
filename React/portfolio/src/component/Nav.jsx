import { SNavWrapper, SIconWrapper } from "../style/SNav";

const Nav = () => {
  return (
    <SNavWrapper>
      <h2>Frontend Developer</h2>
      <h2>Jin JaeHwan</h2>
      <SIconWrapper>
        <a href="https://github.com/Jinga02" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="깃허브 아이콘"
          />
        </a>
        <a href="https://velog.io/@jjh099" target="_blank">
          <img
            src="https://github.com/Jinga02/Review/assets/110621233/638267c6-847d-4330-b419-986b928eee79"
            alt="벨로그 아이콘"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=jjh099@icloud.com"
          target="_blank"
        >
          <img
            src="https://github.com/Jinga02/Review/assets/110621233/a6fcccf4-6371-4c22-98a9-f0dd9a499272"
            alt="메일"
          />
        </a>
      </SIconWrapper>
    </SNavWrapper>
  );
};
export default Nav;
