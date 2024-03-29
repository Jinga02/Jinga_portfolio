import style from "../style/Nav.module.css";

const Nav = () => {
  return (
    <div id={style.wrap}>
      <div className={style.class}>
        <h2>Frontend Developer</h2>
        <h2>Frontend Developer</h2>
      </div>
      <div className={style.name}>
        <h1>Jin JaeHwan</h1>
        <h1>Jin JaeHwan</h1>
      </div>
      <div className={style.icon}>
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
      </div>
    </div>
  );
};
export default Nav;
