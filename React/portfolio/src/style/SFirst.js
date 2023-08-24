import styled from "styled-components";

export const SFirstWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  img {
    position: absolute;
    top: 30%;
    right: 10%;
  }
`;

export const SVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: fill;
  z-index: -1;
`;

export const STitleWrapper = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
  height: 50%;
  #title {
    width: 100%;
    top: 25%;
    font-size: 6rem;
    margin: 0 0 0 5%;
  }
`;
