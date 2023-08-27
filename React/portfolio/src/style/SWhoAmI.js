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
  #newChallenge,
  #teamWork,
  #growth,
  #clean {
    font-size: 4rem;
    margin: 2%;
    // color: #eeeeee;
    // font-weight: 1000;
    text-shaodw: 1px white white;
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;
