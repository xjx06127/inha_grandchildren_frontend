import React from "react";
import styled, { css } from "styled-components";
import GrayNavigator from "./GrayNavigator";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import AppFindNavigator from "./AppFindNavigator";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";

const MainText = styled.h1`
  text-align: center;
  margin-top: 7%;
  margin-bottom: 10%;
  font-family: "MICE";
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

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #ffd05d 50%);
`;

const Highlight2 = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #c5d3ab 50%);
`;

const Apps = styled.div`
  padding-bottom: 10%;
`;

const AppBox = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 7%;
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 5%;
  font-family: "MICE";
`;

const AppImg = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 5px;
`;

const AppName = styled.p`
  /* font-size: 1.6rem; */
  font-weight: bold;
  margin-bottom: 3%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.1rem";
    }
  }};
`;

const AppLevel = styled.p`
  /* font-size: 1.2rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.2rem";
      case "large":
        return "1.5rem";
      case "veryLarge":
        return "1.8rem";
    }
  }};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5%;
  width: 65%;
`;

const GoToDetail = styled.p`
  /* font-size: 1.3rem; */
  text-align: right;
  color: #617143;
  text-decoration: underline;
  margin-top: 1%;

  &:hover {
    transition: 0.4s;
    font-weight: bold;
  }
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

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5%;
  font-family: "MICE";
`;
const Name = styled.p`
  /* font-size: 1.3rem; */
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
const Number = styled.p`
  /* font-size: 1.3rem; */
  font-weight: bold;
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
const Icon1 = styled.img`
  width: 6%;
  height: 6%;
  margin-right: 2%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 7%;
`;

const GoToAppDetail = () => {};

const AppsFind = () => {
  const { appfield } = useParams();
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();
  document.body.style = "background: white;";

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .post(`https://forgrandparents.store/recommend/`, {
        field: appfield,
      })
      .then((res) => {
        setApps(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <AppFindNavigator />
      <MainText fS={fontSize}>
        <Highlight>{appfield}</Highlight>에 관한
        <br />
        적절한 어플을
        <br />
        찾아봤어요!
      </MainText>

      <Apps>
        {apps.map((index, i) => (
          <Fade direction="up" triggerOnce="true" delay={i * 150}>
            <div>
              <NameWrapper>
                <Icon1 src="/Rec.svg"></Icon1>
                <Number fS={fontSize}>{index.like}명</Number>
                <Name fS={fontSize}>이 추천해요!</Name>
              </NameWrapper>
              <AppBox>
                <AppImg src={index.image} />
                <TextBox>
                  <AppName fS={fontSize}>{index.name}</AppName>
                  <AppLevel fS={fontSize}>
                    난이도 :
                    {index.levelvalue === 0
                      ? " 씨앗"
                      : index.levelvalue === 1
                      ? " 새싹"
                      : index.levelvalue === 2
                      ? " 꽃용"
                      : index.levelvalue === 3
                      ? " 열매용"
                      : index.levelvalue === 4
                      ? " 나무용"
                      : index.levelvalue === 5
                      ? " 나무용"
                      : "level정보가 존재하지 않습니다"}
                  </AppLevel>
                  <GoToDetail
                    onClick={() => {
                      navigate(`../AppPage/${index.id}`);
                    }} fS={fontSize}
                  >
                    자세히
                  </GoToDetail>
                </TextBox>
              </AppBox>
            </div>
          </Fade>
        ))}
      </Apps>
    </>
  );
};

export default AppsFind;
