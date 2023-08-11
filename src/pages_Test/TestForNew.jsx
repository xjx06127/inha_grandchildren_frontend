import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Navigator from "../Navigator";
import TestNavigatorForNew from "./TestNavigatorForNew";
import "./Bar.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
const DDiv = styled.div`
  width: 100%;
  height: 10vh;
`;
const All = styled.div`
  padding-top: 11%;
  margin-bottom: 5%;
`;
const Question = styled.div`
  color: #000000;
  margin-left: 10%;
  /* font-size: 1.9rem; */
  display: flex;
  flex-direction: row;
  text-align: left;
  font-family: 'MICE';
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.9rem";
      case "large":
        return "2.2rem";
      case "veryLarge":
        return "2.5rem";
    }
  }};

`;

const Highlight = styled.div`
  color: #df7857;
  font-weight: bolder;
  /* font-size: 1.9rem; */
  height: 0%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.9rem";
      case "large":
        return "2.2rem";
      case "veryLarge":
        return "2.5rem";
    }
  }};

`;
const Icon2 = styled.img`
  width: 8%;
  height: 8%;
  margin-top: 10%;
  margin-left: 45%;
`;
const Home = styled.div`
  color: #5f5f5f;
  /* font-size: 1.3rem; */
  margin-bottom: 10%;
  text-align: center;
  font-family: 'MICE';
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};
`;

const Ans = styled.button`
  color: #000000;
  width: 75%;
  height: 22vh;
  &:hover {
    transition: 0.2s;
    background-color: ${({ clicked }) => (clicked ? "#EFC5B9" : "#FFFFFF")};
  }
  background-color: white;
  border: none;
  font-size: 30px;
  /* font-weight: bold; */
  margin-top: 10%;
  cursor: pointer;
  /* 예시 문구 */
  margin-left: 12.5%;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* font-size: 1.9rem; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'MICE';
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.9rem";
      case "large":
        return "2.2rem";
      case "veryLarge":
        return "2.5rem";
    }
  }};
`;

const Icon = styled.img`
  width: 30%;
  height: 40%;
`;

const Align = styled.div`
  display: flex;
  font-size: 1.6rem;
`;

const PageNum = styled.div`
  color: #df7857;
  /* font-size: 1.6rem; */
  margin-left: 10%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
`;

const NextButton = styled.button`
  width: 60%;
  height: 8vh;
  margin-left: 20%;
  background: linear-gradient(97.27deg, #df7857 0%, #e7ab9a 100%);
  border-radius: 5px;
  color: white;
  /* font-size: 1.6rem; */
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: bold;
  border: none;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  `;
  
const Circle = styled.div`
  position: absolute;
  left: ${({ progress }) => `${progress}%`};
  transform: translateX(-50%);
  width: 4vw;
  height: 4vw;
  background-color: #ca5430;
  border-radius: 50%;
  z-index: 1;
`;

const Highlighter = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #ffd05d 80%);
  border-radius: 3px;
`;

const TestForNew = () => {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext); 
  const [OX, setOX] = useState("");
  const [speakMessage, setSpeakMessage] = useState(false);
  const [speakTimeout, setSpeakTimeout] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // 로딩 화면 표시 여부
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const isNew = localStorage.getItem("IsNew");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // 로딩 화면을 0.2초 후에 비활성화
    }, 200); // 0.2초

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const synth = window.speechSynthesis;

    const speakText = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      synth.speak(utterance);
    };

    if (!speakMessage) {
      speakText("회원가입을 성공해보셨나요?");
      setSpeakMessage(true);
    }
  }, [speakMessage]);
  const stopSpeaking = () => {
    if (speakTimeout) {
      clearTimeout(speakTimeout);
    }
    window.speechSynthesis.cancel();
  };
  const GoTest2 = (answer) => {
    setIsBoxClicked(true);
    stopSpeaking();
    if (isLoading) return; // 로딩 중에는 버튼 클릭 방지
    if (answer === "O") {
      setOX("O");
    } else if (answer === "X") {
      setOX("X");
    }

    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/Test2/${answer}`);
    }, 200); // 200ms의 지연시간
  };

  const animateProgressBar = () => {
    let intervalId;
    const increment = 1; // 각 간격마다 진행률을 증가시킬 값

    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 20) {
          clearInterval(intervalId);
        }
        return prevProgress + increment;
      });
    }, 20); // 10ms 간격으로 실행하여 부드러운 애니메이션 효과를 생성

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    animateProgressBar();
  }, []); // 컴포넌트가 마운트된 후에 한 번만 실행
  return (
    <motion.div
      key="fontSizeSetting" // Add a unique key to the motion.div so that it properly triggers animations during updates
      initial={{ opacity: 0 }} // Initial state (invisible and slightly moved up)
      animate={{ opacity: 1 }} // Animation when the component appears
      exit={{ opacity: 0 }} // Animation when the component is removed from the DOM
      transition={{ duration: 0.2, ease: "easeOut" }} // Animation duration and easing function
    >
      <TestNavigatorForNew />
      <motion.progress
        id="progress"
        value={progress}
        min="0"
        max="100"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 2 }} // 2초 동안 프로그래스 바가 증가하는 애니메이션
      ></motion.progress>
      <Circle progress={progress}></Circle>
      <div>
        <All>
          <PageNum fS={fontSize}>1/5</PageNum>
          <Question fS={fontSize}>
            <Highlight fS={fontSize}>
              <Highlighter>회원가입</Highlighter>
            </Highlight>
            을
          </Question>{" "}
          <Question fS={fontSize}> 성공해 보셨나요?</Question>
        </All>
        <Align>
          <Ans
            clicked={isBoxClicked}
            onClick={() => GoTest2("O")}
            style={{
              transition: "background-color 0.1s",
            }} fS={fontSize}
          >
            <Icon src="/Good.svg"></Icon>네
          </Ans>
        </Align>
        <Align>
          <Ans
            onClick={() => GoTest2("X")}
            style={{
              transition: "background-color 0.1s",
            }}
            clicked={isBoxClicked} fS={fontSize}
          >
            <Icon src="/TT.svg"></Icon>아니요
          </Ans>
        </Align>
        {isNew === "true" && (
          <>
            {/* 여기서 원하는 만큼 여백을 추가할 수 있습니다 */}
            <div style={{ marginBottom: "20%" }}></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TestForNew;
