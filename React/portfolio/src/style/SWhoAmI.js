import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 100vh;
  color: white;

  h1 {
    position: relative;
    width: 40%;
    top: 30%;
    font-size: 4rem;
    margin: 0 0 0 5%;
  }
`;

export const SContactsWrapper = styled.div`
  ${"" /* background-color: red; */}
  position: relative;
  top: -40%;
  width: 70%;
  height: 55%;
  margin-left: 25%;
  padding: 2%;
  text-align: center;
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
