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
  // top:0%;
  left:5%;
  transform:rotate(-5deg)};
  #top {
    font-size: 8em;
    position: absolute;
  
  }
  #top:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #eeeeee;
  }
  #top:nth-child(2) {
    color: #eeeeee;
    animation: animate 2.5s ease-in-out infinite;
  }
  
`;

export const SBottomWrapper = styled.div`
position:absolute;
width:100%;
bottom:38%;
left:55%;
transform:rotate(-5deg)};
#bottom {
  font-size: 8em;
  position: absolute;
  // transform: translate(-50%, -50%);
}
#bottom:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #eeeeee;
}
#bottom:nth-child(2) {
  color: #eeeeee;
  animation: animate 2.5s ease-in-out infinite;
}

`;
