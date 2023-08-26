import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  color: white;
  #whoAmI {
    top: 30%;
    width: 25%;
    font-size: 5rem;
    margin: 0 0 0 5%;
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
  span {
    font-size: 3rem;
    font-weight: 700;
  }
  #newChallenge,
  #teamWork,
  #growth,
  #clean {
    font-size: 3.5rem;
    margin: 2%;
    background: linear-gradient(to right top, #000000, #222222);
    color: transparent;
    -webkit-background-clip: text;
  }
`;
