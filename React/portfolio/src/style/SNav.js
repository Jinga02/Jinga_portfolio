import styled from "styled-components";

export const SNavWrapper = styled.div`
  width: 80%;
  height: 10%;
  position: fixed;
  top: 5%;
  left: 10%;
  z-index: 1000;
`;

export const SHtwo = styled.div`
#dev {
  font-size: 2em;
  position: absolute;
  top:-30%;
}
#dev:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #eeeeee;
}
#dev:nth-child(2) {
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
export const SHone = styled.div`
#name {
  font-size: 2em;
  position: absolute;
  top:0;
}
#name:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #eeeeee;
}
#name:nth-child(2) {
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
export const SIconWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 80%;
  img {
    width: 10%;
    margin: 1% 5% 0 10%;
  }
`;
