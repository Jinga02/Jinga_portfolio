import React, { useEffect, useState } from "react"; // React 패키지 불러오기 추가
import First from "./component/First";
import MyContents from "./component/MyContents";
import MyProjects from "./component/MyProjects";
import Nav from "./component/Nav";
import WhoAmI from "./component/WhoAmI";
import { SBodyWrapper } from "./style/SApp";
import { SectionsContainer, Section } from "react-fullpage";

function App() {
  let options = {
    activeClass: "active",
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 700,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "0",
    sectionPaddingBottom: "0",
    verticalAlign: false,
  };
  return (
    <SBodyWrapper>
      <Nav />
      <SectionsContainer {...options}>
        <section>
          <First />
        </section>
        <section>
          <WhoAmI />
        </section>
        <section>
          <MyContents />
        </section>
        <section>
          <MyProjects />
        </section>
      </SectionsContainer>
    </SBodyWrapper>
  );
}

export default App;
