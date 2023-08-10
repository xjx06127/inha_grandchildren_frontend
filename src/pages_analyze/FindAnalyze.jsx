import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const MoveAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(10%);
  }
`;

const Icon = styled.img`
  width: 80%;
  height: 40%;
  margin-left: 10%;
  margin-top: 30%;
  animation: ${RotateAnimation} 2s linear infinite,
    ${MoveAnimation} 2s linear infinite alternate;
`;

const Text = styled.h1`
  color: #000000;
  text-align: center;
  padding-top: 25%;
  margin-bottom: 30%;
`;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%; /* 화면의 높이를 100%로 설정 */
// `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* 100vh 높이로 설정 */
  /* 다른 스타일들을 확인하여 조정해보세요 */
`;
const CircularContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CircularSVG = styled.svg`
  width: 70vw; /* 화면 너비의 80%로 원의 크기를 설정 */
  height: 70vw; /* 너비와 같이 80vw로 설정 */
  transform: rotate(-90deg);
`;

const BackgroundCircle = styled.circle`
  fill: none;
  stroke: #e5e5e5;
  stroke-width: 9;
`;

const progressAnimation = keyframes`
  to {
    stroke-dasharray: 1506;
    stroke-dashoffset: 0; // 0으로 변경
  }
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke-width: 11;
  stroke-dasharray: 1506;
  stroke-dashoffset: 1506; // 1506으로 변경

  animation: ${progressAnimation} 5s linear forwards;
`;
const Highlighter = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffd05d 50%);
`;

const FindAnalyze = ({ percentage }) => {
  const {appfield} = useParams();

  const [offset, setOffset] = useState(0);

  const navigate = useNavigate(); // navigate 함수 생성

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * 502;
    setOffset(progressOffset);

    const timer = setTimeout(() => {
      navigate(`/AppsFindResult/${appfield}`); //여기야 !!!!!!!!!!!!!
    }, 3000);

    // 컴포넌트가 unmount 될 때 타이머 해제
    return () => clearTimeout(timer);
  }, [percentage, navigate]);
  return (
    <div>
      <Text>
        <Highlighter>{appfield}</Highlighter>에 관한
        <br />
        적절한 어플을
        <br />
        찾는중 입니다.
      </Text>
      <CircularContainer>
        <CircularSVG viewBox="-5 -5 250 250">
          <defs>
            <linearGradient
              id="progressGradient"
              gradientTransform="rotate(90)"
            >
              <stop offset="0%" stopColor="#617143" />
              <stop offset="50%" stopColor="#E7AB9A" />
              <stop offset="100%" stopColor="#DF7857" />
            </linearGradient>
          </defs>
          <BackgroundCircle r="120" cx="120" cy="120" />
          <ProgressCircle
            r="120"
            cx="120"
            cy="120"
            fill="transparent"
            stroke={`url(#progressGradient)`}
            strokeWidth="10"
            strokeDasharray="502"
            strokeDashoffset={offset}
          />
        </CircularSVG>
      </CircularContainer>

      <Icon src="/level.svg" />
    </div>
  );
};

export default FindAnalyze;
