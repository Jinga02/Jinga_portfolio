import styled, { keyframes } from "styled-components";

export const SMyContentsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
`;
export const STitleWrapper = styled.div`
  position: absolute;
  top: 35%;
  width: 100%;
  height: 50%;
  color: #d5cea3;
  #myContent {
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
export const SSkillsWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 30%;
  width: 50%;
  #skill {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(to right, #eeee, #eeee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @keyframes huerotate {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
    p {
      ${"" /* border: 0.2rem solid white; */}
      border-radius: 1rem;
      padding: 0 0.5rem;
    }
  }
`;

export const SSkillsDetailWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: -5%;
  width: 60%;
  height: 60%;
  margin-left: 33%;
  margin-top: 2%;
  h2 {
    padding: 0;
    margin: 0;
    font-size: 2.3rem;
  }
  p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6;
    color: #eeee;
    margin: 0;
  }
`;

export const SJavaScriptWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  width: 46%;
  height: 13rem;
  padding: 1.5rem;
  border: 0.3rem inset #ff4c29;
  border-radius: 1rem;

  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -15%;
    color: #ff4c29;
    background-color: #082032;
    transform: rotate(-5deg);
  }
`;

export const SHtmlScriptWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 46%;
  height: 8rem;
  padding: 1.5rem;
  border: 0.3rem inset #ff4c29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -20%;
    color: #ff4c29;
    background-color: #082032;
    transform: rotate(-5deg);
  }
`;

export const SReactWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 55%;
  width: 46%;
  height: 13rem;
  padding: 1.5rem;
  border: 0.3rem inset #ff4c29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -15%;
    color: #ff4c29;
    background-color: #082032;
    transform: rotate(-5deg);
  }
`;

export const SVueWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 55%;
  width: 46%;
  height: 8rem;
  padding: 1.5rem;
  border: 0.3rem inset #ff4c29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -20%;
    color: #ff4c29;
    background-color: #082032;
    transform: rotate(-5deg);
  }
`;
