import styled from "styled-components";

export const SMyProjectsWrapper = styled.div`
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
export const SProjectWrapper = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 50%;
`;
export const SMovieWrapper = styled.div`
  width: 60%;
  height: 50%;
  margin: 0 0 5% 33%;
  b {
    color: blue;
  }
`;

export const SMovieTitle = styled.div`
  h2 {
    font-size: 2rem;
    margin: 1% 0;
  }
`;
export const SMovieText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  #movieText {
    padding: 2%;
    width: 50%;
    font-size: 1.5rem;
    margin: 0;
  }
  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
`;

export const SCritWrapper = styled.div`
  width: 60%;
  height: 50%;
  margin: 0 0 0 33%;
  b {
    color: green;
  }
`;

export const SCritTitle = styled.div`
  display: flex;
  h2 {
    font-size: 2rem;
    margin: 1% 0;
  }
`;

export const SCritText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  #movieText {
    padding: 2%;
    width: 50%;
    font-size: 1.5rem;
    margin: 0;
  }

  img {
    width: 60px;
    height: 25px;
    margin: auto 0.5%;
  }
`;

export const SProjectVideo = styled.video`
  width: 600px;
  height: 100%;
  // position: relative; // 변경된 부분

  object-fit: fill;
  border-radius: 10px;
`;
