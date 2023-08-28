import { SNavWrapper, SIconWrapper, SHtwo, SHone } from "../style/SNav";

const Nav = () => {
  return (
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
  );
};
export default Nav;
