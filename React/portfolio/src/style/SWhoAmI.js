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
    font-size: 5rem;
    margin: 0 0 0 5%;
  }
`;

export const SContactsWrapper = styled.div`
  width: 73%;
  height: 55%;
  margin-top: -15%;
  margin-left: 25%;
  padding: 2%;
  text-align: center;
  // #skills {
  //   position: relative;
  //   padding: 0 10%;
  //   font-size: 1.7rem;
  //   font-weight: 700;
  // }
  // #ssafy {
  //   position: relative;
  //   padding: 0 10%;
  //   font-size: 1.7rem;
  //   font-weight: 700;
  // }
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
