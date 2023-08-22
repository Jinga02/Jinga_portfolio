import styled from "styled-components";

export const SFirstWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;

  h1 {
    position: relative;
    top: 30%;
    font-size: 6rem;
    margin: 0 0 0 5%;
  }
`;

export const SVideo = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;
