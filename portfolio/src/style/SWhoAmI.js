import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #eeeeee;

  #whoAmI {
    top: 30%;
    width: 25%;
    font-size: 5rem;
    font-weight: 700;
    margin: 0 0 0 5%;
    background: linear-gradient(to right, #eeeeee, gray);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #Introduce {
    position: absolute;
    top: 35%;
    width: 70%;
    height: 55%;
    margin-left: 25%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
  }
  #frontend {
    font-size: 3rem;
    font-weight: 700;
  }
  .container {
    display: flex;
  }
  .container>span{
    margin: 0 auto;
    animation: shake 0.5s infinite;
    font-size: 3.5rem;
    background: linear-gradient(to right, #eeeeee, gray);
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
