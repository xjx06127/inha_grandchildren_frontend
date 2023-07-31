import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Navigator from "../Navigator";
import TestNavigator from "./TestNavigator";
import "./Bar.css";

const All = styled.div`
  padding-top: 11%;
  margin-bottom: 5%;
`;
const Question = styled.div`
  color: #000000;
  margin-left: 10%;
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  text-align: left;
`;
const Highlight = styled.div`
  color: #df7857;
  font-weight: bolder;
  font-size: 1.9rem;
  height: 0%;
`;

const Ans = styled.button`
  color: #000000;
  width: 75%;
  height: 22vh;
  &:hover {
    background-color: #df7857;
    transition: 1.5s;
    color: white;
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
  font-size: 1.6rem;
  margin-left: 10%;
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

const Test5 = () => {
  const navigate = useNavigate();

  const { OX, OX2, OX3, OX4 } = useParams();

  const [OX5, setOX5] = useState("");

  const [speakMessage, setSpeakMessage] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const speakText = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      synth.speak(utterance);
    };

    if (!speakMessage) {
      speakText("어플 삭제를 해보셨나요?");
      setSpeakMessage(true);
    }
  }, [speakMessage]);

  const GoResult = (answer) => {
    if (answer === "네") {
      setOX5("O");
    } else if (answer === "아니요") {
      setOX5("X");
    }
  };

  const GoNextPage = () => {
    navigate(`/${OX}/${OX2}/${OX3}/${OX4}/${OX5}/Analyze`);
  };

  return (
    <>
      <TestNavigator />
      <progress id="progress" value="100" min="0" max="100"></progress>
      <div>
        <All>
          <PageNum>5/5</PageNum>
          <Question>
            <Highlight>
              <Highlighter>어플 삭제</Highlighter>
            </Highlight>
            를
          </Question>{" "}
          <Question> 해보셨나요?</Question>
        </All>
        <Align>
          <Ans onClick={() => GoResult("네")}>
            <Icon src="/Good.svg"></Icon>네
          </Ans>
        </Align>
        <Align>
          <Ans onClick={() => GoResult("아니요")}>
            <Icon src="/TT.svg"></Icon>아니요
          </Ans>
        </Align>
        <NextButton onClick={GoNextPage}>다음</NextButton>
      </div>
    </>
  );
};

export default Test5;
