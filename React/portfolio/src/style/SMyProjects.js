import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SMyProjectsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;

export const STitleWrapper = styled.div`
  position: absolute;
  top: 35%;
  width: 100%;
  height: 50%;
  #myProject {
    width: 25%;

    font-size: 5rem;
    margin: 0 0 0 5%;
  }
`;

export const SSwiper = styled(Swiper)`
  position: absolute;
  top: 25%;
  width: 50%;
  height: 50%;
  margin: 0 0 5% 35%;
`;

export const SSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  padding: 2% 3% 0 3%;
  border-radius:20px;
  background: linear-gradient(20deg, rgb(20, 20, 20), rgb(80, 80, 80));
  }
`;

export const SMovieTitle = styled.div`
  display: flex;
  h2 {
    font-size: 2rem;
    margin: 1% 0;
  }
  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
  b {
    color: blue;
  }
`;
export const SMovieText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  #movieText {
    padding: 2%;
    width: 50%;
    font-size: 1.5rem;
    margin: 0;
  }
  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
  h2 {
    width: 100%;
    position: relative;
    background-color: red;
    top: 100px;
    right: 88%;
  }
`;

export const SCritTitle = styled.div`
  display: flex;
  padding: 2%;
  h2 {
    font-size: 2rem;
    margin: 1% 0;
  }
  b {
    color: #33ff33;
  }
  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
`;

export const SCritText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  #movieText {
    padding: 2%;
    width: 50%;
    font-size: 1.5rem;
    margin: 0;
  }

  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
`;

export const SProjectVideo = styled.video`
  width: 100%;
  height: 80%;
  z-index: -1;
  object-fit: fill;
  border-radius: 10px;
`;
