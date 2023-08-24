import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 100vh;
  color: white;
  #title {
    top: 30%;
    width: 25%;
    font-size: 5rem;
    margin: 0 0 0 5%;
  }
  #Introduce {
    position: absolute;
    top: 25%;
    width: 70%;
    height: 55%;
    margin-left: 25%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
  }
  span {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(to right top, #000000, #666666);
    color: transparent;
    -webkit-background-clip: text;
  }
  #newChallenge,
  #teamWork,
  #growth,
  #refactoring,
  #clean {
    margin: 2%;
  }
`;
