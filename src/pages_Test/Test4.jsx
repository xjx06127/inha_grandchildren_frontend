import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Navigator from "../Navigator";
import TestNavigator from "./TestNavigator";
import "./Bar.css";
import { motion } from "framer-motion";
const All = styled.div`
  padding-top: 11%;
  margin-bottom: 5%;
`;
const Home = styled.div`
  color: #5f5f5f;
  font-size: 1.3rem;
  margin-bottom: 10%;
  text-align: center;
  font-family: "MICE";
`;
const Question = styled.div`
  color: #000000;
  margin-left: 10%;
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  text-align: left;
  font-family: "MICE";
`;
const Highlight = styled.div`
  color: #df7857;
  font-weight: bolder;
  font-size: 1.9rem;
  height: 0%;
`;
const Icon2 = styled.img`
  width: 8%;
  height: 8%;
  margin-top: 10%;
  margin-left: 45%;
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
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "MICE";
`;

const Icon = styled.img`
  width: 30%;
  height: 40%;
`;

const Align = styled.div`
  display: flex;
  font-size: 1.6rem;
`;
const Circle = styled.div`
  position: absolute;
  left: ${({ progress }) => `${progress}%`};
  transform: translateX(-50%);
  width: 4vw;
  height: 4vw;
  background-color: #ca5430;
  border-radius: 50%;
  border: #e3927a;
  z-index: 1;
`;
const PageNum = styled.div`
  color: #df7857;
  font-size: 1.6rem;
  margin-left: 10%;
`;
const DDiv = styled.div`
  width: 100%;
  height: 10vh;
`;
const NextButton = styled.button`
  width: 60%;
  height: 8vh;
  margin-left: 20%;
  background: linear-gradient(97.27deg, #df7857 0%, #e7ab9a 100%);
  border-radius: 5px;
  color: white;
  font-size: 1.6rem;
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: bold;
  border: none;
`;
const Highlighter = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #ffd05d 80%);
  border-radius: 3px;
`;
const Test4 = () => {
  const navigate = useNavigate();

  const { OX, OX2, OX3 } = useParams();
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const [OX4, setOX4] = useState("");
  const [progress, setProgress] = useState(0);
  const isNew = localStorage.getItem("IsNew");

  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);
  
  const GoTest5 = (answer) => {
    setIsBoxClicked(true);
    if (answer === "O") {
      setOX4("O");
    } else if (answer === "X") {
      setOX4("X");
    }
    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/Test5/${OX}/${OX2}/${OX3}/${answer}`);
    }, 200); // 100ms의 지연시간
  };
  const animateProgressBar = () => {
    let intervalId;
    const initialProgress = 60; // 시작 진행률 (60%)
    const targetProgress = 80; // 목표 진행률 (80%)

    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= targetProgress) {
          clearInterval(intervalId);
          return targetProgress;
        }
        return prevProgress + 1;
      });
    }, 20); // 10ms 간격으로 실행하여 부드러운 애니메이션 효과를 생성

    setProgress(initialProgress); // 시작 진행률 설정

    return () => clearInterval(intervalId);
  };
  useEffect(() => {
    animateProgressBar();
  }, []); // 컴포넌트가 마운트된 후에 한 번만 실행

  return (
    <>
      <TestNavigator />
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
          <PageNum>4/5</PageNum>
          <Question>
            <Highlight>
              <Highlighter>로그인</Highlighter>
            </Highlight>
            이
          </Question>{" "}
          <Question> 어려우신가요?</Question>
        </All>
        <Align>
          <Ans
            clicked={isBoxClicked}
            onClick={() => GoTest5("O")}
            style={{
              transition: "background-color 0.1s", // 배경색 변경에 대한 트랜지션 시간을 줄입니다.
            }}
          >
            <Icon src="/Good.svg"></Icon>네
          </Ans>
        </Align>
        <Align>
          <Ans
            clicked={isBoxClicked}
            onClick={() => GoTest5("X")}
            style={{
              transition: "background-color 0.1s", // 배경색 변경에 대한 트랜지션 시간을 줄입니다.
            }}
          >
            <Icon src="/TT.svg"></Icon>아니요
          </Ans>
        </Align>
        {isNew == "false" && ( // Check if IsNew is set to false
          <>
            <Icon2
              src="/GoHome.svg"
              onClick={() => navigate("/Main")} // Icon2 click handler
            />
            <Home>홈으로</Home>
          </>
        )}
        {isNew === "true" && (
          <>
            {/* 여기서 원하는 만큼 여백을 추가할 수 있습니다 */}
            <div style={{ marginBottom: "20%" }}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Test4;
