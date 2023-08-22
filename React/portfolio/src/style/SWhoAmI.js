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
    font-size: 6rem;
    margin: 0 0 0 5%;
  }
`;

export const SContactsWrapper = styled.div`
  background-color: rgb(120, 120, 120);
  width: 50%;
  height: 55%;
  margin-left: 42%;
  margin-top: -8%;
  border-radius: 40px;
  padding: 1%;
  #skills {
    position: relative;
    padding: 0 10%;
    font-size: 1.7rem;
    font-weight: 700;
  }
  #ssafy {
    position: relative;
    padding: 0 10%;
    font-size: 1.7rem;
    font-weight: 700;
  }
  #Introduce {
    position: relative;
    padding: 0 10%;
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
`;
