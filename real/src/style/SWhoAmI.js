import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #eeee;
  ${"" /* font-family: monospace; */}
`;

export const STitleWrapper = styled.div`
  position: absolute;
  top: 35%;
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

export const SContentWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;
  width: 70%;
  height: 60%;
  padding: 2%;
  border-radius: 2rem;
  background-color: rgb(8, 32, 55);
  border: 0.3rem solid #ff4c29;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate__pulse {
    animation: pulse 2s infinite; /* 무한 반복 애니메이션 */
  }
  img {
    width: 20%;
    ${"" /* margin-left: 0%; */}
    background: #ff4c29;
    border-radius: 40%;
  }
  #myInfo {
    position: absolute;
    ${"" /* width: 60%; */}
    padding: 1%;
    top: 3%;
    left: 25%;
    font-size: 100%;
    font-weight: 1000;

    #simple,
    #deep {
      color: #ff4c29;
      font-size: 2rem;
      font-weight: 1000;
    }
  }
  #text {
    position: absolute;
    width: 80%;
    left: 18%;
    bottom: 10%;
    #content {
      font-size: 180%;
      font-weight: 1000;
      white-space: nowrap;
      ${"" /* transform: rotate(3deg); */}
      margin: 0;
      color: transparent;
    }

    #content::before {
      content: "사용자 경험 협업적 문제 해결유지보수 클린코드";
      position: absolute;
      top: 20%;
      left: 35%;
      width: 100%;
      height: 100%;
      color: #ff4c29;
      overflow: hidden;
      animation: typing 5s steps(31) infinite;
    }
    #contentTwo {
      font-size: 180%;
      font-weight: 1000;
      white-space: nowrap;
      margin: 0;
      color: transparent;
      ${"" /* transform: rotate(-3deg); */}
    }

    #contentTwo::before {
      content: "새로운것에 대한 호기심과 도전의식";
      position: absolute;
      top: -20%;
      left: -5%;
      width: 100%;
      height: 100%;
      color: #ff4c29;
      overflow: hidden;
      animation: typing 5s steps(31) infinite;
    }
    @keyframes typing {
      0% {
        width: 0%;
      }
      50% {
        width: 100%;
      }
      100% {
        width: 0%;
      }
    }
    #textOne {
      font-size: 150%;
      font-weight: 1000;
      margin: 0;
    }
    #textTwo {
      font-size: 150%;
      font-weight: 1000;
      margin: 0;
    }
    #emphasis {
      display: flex;
      justify-content: space-between;
      font-size: 200%;
      font-weight: 1000;
      animation: shake 0.8s infinite;
      background: linear-gradient(to right, #ff4c10, #ff4c29);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      p {
        margin: 1% 0;
      }
    }
    #emphasisTwo {
      font-size: 200%;
      font-weight: 1000;
      animation: shake 0.8s infinite;
      background: linear-gradient(to right, #ff4c10, #ff4c29);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 1% 0;
    }
  }
  .typing-demo {
    margin: 2% 0;
    width: 40ch;
    white-space: nowrap;
    overflow: hidden;
    font-size: 2rem;
    font-weight: 1000;
    color: #ff4c29;
    animation: typing 3s steps(32), blink 0.5s step-end infinite alternate;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    to {
      visibility: hidden;
    }
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
  }
`;
