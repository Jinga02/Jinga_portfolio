import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SMyProjectsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  img {
    width: 3rem;
    position: relative;
    right: 1.2rem;
    top: -3%;
    transform: rotate(-10deg);
    animation: motion 0.4s linear 0s infinite alternate;
  }
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;

export const STitleWrapper = styled.div`
  position: absolute;
  top: 35%;
  width: 100%;
  height: 50%;
  color: #d5cea3;
  #myProject {
    width: 25%;
    font-size: 4rem;
    font-weight: 1000;
    margin: 0 0 0 5%;
    color: #d5cea3;
    background: linear-gradient(to left, #eeee, #eeee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SSwiper = styled(Swiper)`
  position: absolute;
  top: 30%;
  width: 50%;
  height: 50%;
  margin: 0 0 5% 35%;

  .swiper-button-next {
    background-size: 50% auto;
    background-position: center;
  }

  .swiper-button-prev {
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
  }
`;
SSwiper.displayName = "SwiperWrapper";
export const SSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  padding: 3%;
  border-radius: 20px;
  background-color: rgb(8, 32, 55);
  border: 0.2rem inset #ff4c29;
`;
SSwiperSlide.displayName = "SwiperSlide";
export const SMovieTitle = styled.div`
  display: flex;
  width: 100%;
  h2 {
    font-size: 2rem;
    margin: 1% 2%;
  }
  p {
    border: 0.2rem inset white;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin-right: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
    border: 0.2rem inset #ff4c29;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin: auto 0.5%;
  }
  b {
    color: #ff4c29;
  }
`;

export const SCritTitle = styled.div`
  display: flex;
  width: 100%;
  h2 {
    font-size: 2rem;
    margin: 1% 2%;
  }
  p {
    border: 0.2rem inset white;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin-right: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
    border: 0.2rem inset #ff4c29;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin: auto 0.5%;
  }
  b {
    color: #ff4c29;
  }
`;
export const SNubioTitle = styled.div`
  display: flex;
  width: 100%;
  h2 {
    font-size: 2rem;
    margin: 1% 2%;
  }
  p {
    border: 0.2rem inset white;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin-right: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
    border: 0.2rem inset #ff4c29;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin: auto 0.5%;
  }

  b {
    color: #ff4c29;
  }
`;

export const SProjectVideo = styled.video`
  width: 100%;
  height: 85%;
  object-fit: fill;
  border-radius: 10px;
`;
