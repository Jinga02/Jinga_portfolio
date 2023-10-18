import styled from "styled-components";

export const SWhoAmIWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #eeee;
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
  #textOne {
    display: flex;
    height: 70%;
    
  }
  #icon {
    width: 20%;
    img {
      width: 100%;
      height: 70%;
      background: #ff4c29;
      border-radius: 40%;
    }
  }
  #myInfo {
    width: 70%;
    height:70%;
    padding: 1%;
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 1000;
    #simple,
    #deep {
      color: #ff4c29;
      font-size: 1.5rem;
      font-weight: 1000;
    }
  }
  #textTwo {
    position: absolute;
    width: 80%;
    height:20%;
    left: 18%;
    bottom:3%;
    #content {
      font-size: 1.5rem;
      font-weight: 1000;
      white-space: nowrap;
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
      font-size: 1.5rem;      font-weight: 1000;
      white-space: nowrap;
      margin: 0;
      color: transparent;
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

    #textBottom {
      font-size: 1.5rem;
      font-weight: 1000;
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
`;
