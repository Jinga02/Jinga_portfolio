import styled from "styled-components";

export const SFirstWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: relative;
  .animate__animated {
    ${"" /* position: absolute; */}
    ${"" /* top: 50%; */}
    ${"" /* left: 30%; */}
    ${"" /* font-size: 3rem; */}
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
  }
`;

export const STopWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 10%;
  left: 5%;
  transform: rotate(-5deg);
  #top {
    font-size: 9em;
    position: absolute;
  }
  #top:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #ff4c29;
  }
  #top:nth-child(2) {
    color: #ff4c29;
    animation: animate 4s ease-in-out infinite;
  }
`;
export const SImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SBottomWrapper = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  right: 5%;
  transform: rotate(-5deg);
  #bottom {
    font-size: 9em;
    position: absolute;
    right: 3%;
  }
  #bottom:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #ff4c29;
  }
  #bottom:nth-child(2) {
    color: #ff4c29;
    animation: animate 2.5s ease-in-out infinite;
  }
`;

export const TypingWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  .typing-demo {
    width: 45ch;
    animation: typing 2s steps(32);
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 3.5rem;
    color: #eeee;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
`;
