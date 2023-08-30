import styled from "styled-components";

export const SFirstWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;

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

export const STopWrapper = styled.div`
  position:absolute;
  width:100%;
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
    animation: animate 4s ease-in-out infinite;
  }
  
`;
export const SImageWrapper = styled.div`
  position: relative;
  // top: 18%;
  width: 100%;
  height: 100%;
  // background-color: red;
  img {
    width: 100%;
    height: 100%;
    position: relative;

    top: 0;
    left: 0;
    z-index: -1;
  }
`;
export const SBottomWrapper = styled.div`
position:absolute;
width:100%;
bottom:35%;
left:55%;
transform:rotate(-5deg)};
#bottom {
  font-size: 8em;
  position: absolute;
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
