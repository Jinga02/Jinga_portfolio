import styled from "styled-components";

export const SNavWrapper = styled.div`
  width: 80%;
  height: 10%;
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 1000;
`;

export const SHtwo = styled.div`
  #dev {
    font-size: 2em;
    position: absolute;
    top: -50%;
    background: linear-gradient(to right, #eeeeee, gray);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  // #dev:nth-child(1) {
  //   color: transparent;
  //   -webkit-text-stroke: 1px gray;
  // }
  // #dev:nth-child(2) {
  //   color: gray;
  //   animation: animate 4s ease-in-out infinite;
  // }
`;
export const SHone = styled.div`
  #name {
    font-size: 2em;
    position: absolute;
    top: -10%;
    background: linear-gradient(to right, #eeeeee, gray);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  // #name:nth-child(1) {
  //   color: transparent;
  //   -webkit-text-stroke: 2px gray;
  // }
  // #name:nth-child(2) {
  //   color: gray;
  //   animation: animate 4s ease-in-out infinite;
  // }
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
