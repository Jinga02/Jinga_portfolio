import styled from "styled-components";

export const SBodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #141414;
  margin: 0;
  padding: 0;
  overflow: hidden;
  .swiper-cube-shadow {
    display: none;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: gray;

    animation: arrowAnimation 1.2s infinite ease-in-out;
    transition: transform 0.3s ease-in-out;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: translateY(-50%) scale(1.2); /* 호버시 크기 확대 */
    animation-play-state: paused; /* 호버시 애니메이션 일시정지 */
  }

  @keyframes arrowAnimation {
    0% {
      transform: translateY(-50%) scale(1);
    }
    50% {
      transform: translateY(-50%) scale(1.2);
    }
    100% {
      transform: translateY(-50%) scale(1);
    }
  }
`;

export const SBottomVideo = styled.video`
  position: absolute;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 20%;
  object-fit: fill;
`;
