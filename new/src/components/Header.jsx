import React from "react";

export default function Header() {
  return (
    <div className="w-full fixed z-50  text-white top-8 flex justify-center items-center gap-5 font-sans text-lg transform-none">
      <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72"></div>
      <a className="scale-btn" href="/pdf/notion.pdf" target="_blank">
        Notion
      </a>

      <a className="scale-btn" href="/pdf/resume.pdf" target="_blank">
        Resume
      </a>

      <a
        className="scale-btn"
        href="https://github.com/Jinga02"
        target="_blank"
      >
        Github
      </a>
      <a
        className="scale-btn"
        href="https://velog.io/@jjh099/posts"
        target="_blank"
      >
        Velog
      </a>
      <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72"></div>
    </div>
  );
}
