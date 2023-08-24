import styled, { keyframes } from "styled-components";

export const SMyContentsWrapper = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 100vh;
  color: white;
`;
export const STitleWrapper = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: 50%;
  #title {
    width: 25%;
    top: 25%;
    font-size: 5rem;
    margin: 0 0 0 5%;
  }
`;
export const SSkillsWrapper = styled.div`
  position: absolute;
  top: 20%;
  width: 50%;
  margin-left: 29%;
  #skills {
    margin-left: 9%;
  }
  #skill {
    font-size: 3.5rem;
    font-weight: 700;
    hr {
      margin: 5px 0 0 0;
      border-radius: 10px;
      border-bottom: 5px solid transparent;
      background-image: linear-gradient(#444, #444),
        linear-gradient(to left, #37a9fa, #5951f3);
      background-clip: content-box, border-box;
      background-origin: border-box;
      animation: huerotate 6s infinite linear;
    }
    @keyframes huerotate {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
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
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 20px 10px;
    line-height: 1.8;
  }
`;

export const SJavaScriptWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  hr {
    width: 30%;
    float: left;
    border-radius: 10px;
    border-bottom: 5px solid transparent;
    background-image: linear-gradient(#444, #444),
      linear-gradient(to left, #37a9fa, #5951f3);
    background-clip: content-box, border-box;
    background-origin: border-box;
    animation: huerotate 6s infinite linear;
  }

  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const STypeScriptWrapper = styled.div`
  position: relative;
  top: -50%;
  left: 50%;
  width: 50%;
  height: 50%;
  hr {
    width: 32%;
    float: left;
    border-radius: 10px;
    border-bottom: 5px solid transparent;
    background-image: linear-gradient(#444, #444),
      linear-gradient(to left, #37a9fa, #5951f3);
    background-clip: content-box, border-box;
    background-origin: border-box;
    animation: huerotate 6s infinite linear;
  }

  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const SReactWrapper = styled.div`
  position: relative;
  bottom: 50%;
  left: 0;
  width: 50%;
  height: 50%;
  hr {
    width: 18%;
    float: left;
    border-radius: 10px;
    border-bottom: 5px solid transparent;
    background-image: linear-gradient(#444, #444),
      linear-gradient(to left, #37a9fa, #5951f3);
    background-clip: content-box, border-box;
    background-origin: border-box;
    animation: huerotate 6s infinite linear;
  }

  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const SVueWrapper = styled.div`
  position: relative;
  bottom: 100%;
  left: 50%;
  width: 50%;
  height: 50%;
  hr {
    width: 12%;
    float: left;
    border-radius: 10px;
    border-bottom: 5px solid transparent;
    background-image: linear-gradient(#444, #444),
      linear-gradient(to left, #37a9fa, #5951f3);
    background-clip: content-box, border-box;
    background-origin: border-box;
    animation: huerotate 6s infinite linear;
  }

  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
