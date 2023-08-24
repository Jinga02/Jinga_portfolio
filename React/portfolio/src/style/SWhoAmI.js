import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 100vh;
  color: white;
  position: relative;
  #title {
    position: relative;
    top: 30%;
    width: 30%;
    font-size: 4rem;
    margin: 0 0 0 5%;
  }
  #Introduce {
    // position: relative;
    width: 70%;
    height: 55%;
    margin-left: 25%;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 700;
  }
  span {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right top, #000000, #666666);
    color: transparent;
    -webkit-background-clip: text;
  }
  #newChallenge,
  #teamWork,
  #growth {
    margin: 2%;
  }
`;

export const SContactsWrapper = styled.div`
  #Introduce {
    position: relative;
    padding: 10%;
    font-size: 1.7rem;
    font-weight: 700;
  }
  span {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right top, #000000, #666666);
    color: transparent;
    -webkit-background-clip: text;
  }
  #newChallenge,
  #teamWork,
  #growth {
    margin: 2%;
  }
`;
