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
    font-weight: 1000;
    margin: 0 0 0 5%;
    background: linear-gradient(to right, #eeeeee, gray);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SSwiper = styled(Swiper)`
  position: absolute;
  top: 25%;
  width: 50%;
  height: 50%;
  margin: 0 0 5% 35%;
`;
SSwiper.displayName = "SwiperWrapper";
export const SSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  padding: 2% 3% 0 3%;
  border-radius:20px;
  background: linear-gradient(20deg, rgb(30, 30, 30), rgb(0, 0, 0));
  }
`;
SSwiperSlide.displayName = "SwiperSlide";
export const SMovieTitle = styled.div`
  display: flex;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin: 1% 2%;
  }
  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
  a {
    margin: auto 0.5%;
  }
  #readMore {
    width: 100px;
    height: 40px;
    float: right;
  }
  b {
    color: #0033ff;
  }
`;

export const SCritTitle = styled.div`
  display: flex;
  width: 100%;
  h2 {
    font-size: 2rem;
    margin: 1% 2%;
  }
  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
  a {
    margin: auto 0.5%;
  }
  #readMore {
    width: 100px;
    height: 40px;
    float: right;
  }
  b {
    color: #0033ff;
  }
`;

export const SProjectVideo = styled.video`
  width: 100%;
  height: 85%;
  object-fit: fill;
  border-radius: 10px;
`;
