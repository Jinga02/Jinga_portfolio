import styled from "styled-components";

export const SFirstWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  img {
    width: 100%;
    hight: 100%;
    z-index: -1;
  }
  .word {
    position: absolute;
    top: 32%;
    left: 38%;
    color: white;
    font: 700 normal 2.5em "tahoma";
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
  }
`;

export const STextWrapper = styled.div`
  width: 22ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
export const STopWrapper = styled.div`
  position:absolute;
  width:100%;
  top:3%;
  left:5%;
  transform:rotate(-5deg)};
  #top {
    font-size: 8em;
    position: absolute;
  
  }
  #top:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 3px #eeeeee;
  }
  #top:nth-child(2) {
    color: #eeeeee;
    animation: animate 4s ease-in-out infinite;
  }
  
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
  
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
`;

export const SBottomWrapper = styled.div`
position:absolute;
width:100%;
bottom:40%;
left:55%;
transform:rotate(-5deg)};
#bottom {
  font-size: 8em;
  position: absolute;
  // transform: translate(-50%, -50%);
}
#bottom:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 3px #eeeeee;
}
#bottom:nth-child(2) {
  color: #eeeeee;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
`;

// export const STextBanner = styled.div`
//   font-size: 2rem;
//   font-weight: 1000;
//   white-space: nowrap;
//   // padding: 100px 50px;
//   text-transform: uppercase;
//   font-weight: 400;
//   span {
//     position: relative;
//     // top: 30%;
//     display: inline-block;
//     clip: rect(0px, 0px, 300px, 0px);
//     color: #575757;
//   }
//   .anim-text {
//     overflow: hidden;
//     white-space: nowrap;
//     // top: 0;
//     // left: 0;
//     // position: absolute;
//     transition: width 1s ease;
//     clip: rect(0px, 0px, 300px, 0px);
//   }
// `;
