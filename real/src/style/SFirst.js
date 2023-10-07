import styled from "styled-components";

export const SFirstWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position:relative;

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
  top:-10%;
  transform:rotate(-5deg)};
  #top {
    font-size: 8em;
    position:absolute;
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
position:absolute;
top:70%;
width:100%;
transform:rotate(-5deg)};
#bottom {
  font-size: 8em;
  position:absolute;
  right:3%;
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
