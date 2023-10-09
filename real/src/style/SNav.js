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
    background: linear-gradient(to right, #eeee, #334756);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const SHone = styled.div`
  #name {
    font-size: 2em;
    position: absolute;
    top: -10%;
    background: linear-gradient(to right, #eeee, #334756);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const SIconWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0px;
  left: 80%;
  img {
    width: 40%;
    margin: 1% 5% 0 10%;
  }
`;
