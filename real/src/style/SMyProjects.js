import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SMyProjectsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  p{
    border:0.2rem solid white;
    border-radius:0.5rem;
    padding:0.3rem;
    margin-right: 1rem;
  }
  a {
    color:white;
    text-decoration:none;
    border:0.2rem solid none;
    border-radius:0.5rem;
    padding:0.3rem;
    margin: auto 0.5%;
    background-image: linear-gradient(#444, #444),
      linear-gradient(to left, #37a9fa, #5951f3);
    background-clip: content-box, border-box;
    background-origin: border-box;
    animation: huerotate 6s infinite linear;
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
  p{
    border:0.2rem solid white;
    border-radius:0.5rem;
    padding:0.3rem;
    margin-right: 1rem;
  }
  a {
    color:white;
    text-decoration:none;
    border:0.2rem solid none;
    border-radius:0.5rem;
    padding:0.25rem;
    margin: auto 0.5%;
    background-image: linear-gradient(#000, #000),
      linear-gradient(to left, #37a9fa, #5951f3);
    background-clip: content-box, border-box;

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
