import styled, { keyframes } from "styled-components";

export const SMyContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  font-family: monospace;
`;
export const STitleWrapper = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  height: 50%;
  #myContent {
    width: 25%;
    font-size: 5rem;
    font-weight: 1000;
    margin: 0 0 0 5%;
    background: linear-gradient(to right, #eeee, #eeee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const SSkillsWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 12%;
  width: 50%;
  #skill {
    font-size: 3.5rem;
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
    hr {
      border-radius: 10px;
      border-bottom: 5px solid transparent;
      background-image: linear-gradient(#444, #444),
        linear-gradient(to left, #37a9fa, #5951f3);
      background-clip: content-box, border-box;
      background-origin: border-box;
      animation: huerotate 6s infinite linear;
    }
  }
`;

export const SSkillsDetailWrapper = styled.div`
  position: absolute;
  top: 30%;
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
    font-size: 1.5rem;
    font-weight: 700;
    padding: 20px 10px;
    line-height: 1.8;
    color: #eeee;
  }
`;

export const SJavaScriptWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 46%;
  height: 30%;
  padding: 1rem;
  border: 0.3rem solid #FF4C29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -17%;
    color: #FF4C29;
    background-color: #082032;
    // border: 0.2rem solid white;
    transform:rotate(-10deg)};    
  }
`;

export const STypeScriptWrapper = styled.div`
  position: relative;
  top: -36%;
  left: 50%;
  width: 46%;
  height: 30%;
  padding: 1rem;
  border: 0.3rem solid #FF4C29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -17%;
    color: #FF4C29;
    background-color: #082032;
    // border: 0.2rem solid white;
    transform:rotate(-10deg)};  }
`;

export const SReactWrapper = styled.div`
  position: relative;
  bottom: 22%;
  left: 0;
  width: 46%;
  height: 35%;
  padding: 1rem;
  border: 0.3rem solid #FF4C29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -17%;
    color: #FF4C29;
    background-color: #082032;
    // border: 0.2rem solid white;
    transform:rotate(-10deg)};  }
`;

export const SVueWrapper = styled.div`
  position: relative;
  bottom: 63%;
  left: 50%;
  width: 46%;
  height: 35%;
  padding: 1rem;
  border: 0.3rem solid #FF4C29;
  border-radius: 1rem;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    top: -17%;
    color: #FF4C29;    background-color: #082032;
    // border: 0.2rem solid white;
    transform:rotate(-10deg)};
  }
`;
