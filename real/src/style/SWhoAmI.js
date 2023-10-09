import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #eeee;
  font-family: monospace;

  #Introduce {
    position: absolute;
    top: 35%;
    width: 70%;
    height: 55%;
    margin-left: 25%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    .final{
      margin:0 0 3rem 0;
      animation: shake 0.5s infinite;
      font-size: 3.5rem;
      background: linear-gradient(to right, #FF4C10, #FF4C29);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  #frontend {
    font-size: 3rem;
    font-weight: 700;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
  .container>p{
    margin: 2rem 1rem 4rem 0;
    animation: shake 0.5s infinite;
    font-size: 3.5rem;
    background: linear-gradient(to right, #FF4C10, #FF4C29);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @keyframes shake {
    0% {
      transform: translate(1px, -2px) rotate(0deg);
    }
    10% {
      transform: translate(0px, 2px) rotate(0deg);
    }
    20% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, 0px) rotate(1deg);
    }
    50% {
      transform: translate(0px, -2px) rotate(0deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(0deg);
    }
    80% {
      transform: translate(0px, 0px) rotate(1deg);
    }
    90% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    100% {
      transform: translate(1px, 1px) rotate(0deg);
    }
`;

export const STitleWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: -5%;
  width: 100%;
  height: 50%;
  color: #d5cea3;
  #whoAmI {
    width: 25%;
    font-size: 5rem;
    font-weight: 1000;
    margin: 0 0 0 5%;
    color: #d5cea3;
    background: linear-gradient(to left, #eeee, #eeee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
