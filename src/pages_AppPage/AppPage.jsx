import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TestNavigator from "../pages_Test/TestNavigator";
import { useParams } from "react-router";
import axios from "axios";
// 안쓰는 페이지

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #ffffff;
  width: 100%;
  margin-bottom: 10%;
`;

const AppNameWrapper = styled.div`
  text-align: center;
  margin-top: 5%;
`;
const AppName = styled.p`
  font-weight: bold;
  font-size: 1.9rem;
`;

const Con = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로축 가운데 정렬 */
  align-items: center;
  margin-top: 7%;
  margin-left: 12%;
  margin-right: 12%;
`;

const Circle = styled.div`
  width: 25vw;
  height: 25vw;
  background-color: #617143;
  border-radius: 50%; /* 50%로 설정하여 원 모양 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
`;
const Level = styled.p`
  font-size: 1.6rem;
  margin-left: 10%;
  width: 60%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  align-items: center;
`;

/*
const AppImage=styled.img`
width:auto;
height:auto; 
`;
어플이미지 받아오기 */

const BText = styled.p`
  font-size: 1.6rem;
  margin-top: 3%; /*const appimg넣은후 20%정도로 수정 */
  text-align: center; /* 내용을 가로축으로 가운데 정렬 */
`;

const Button = styled.button`
  background: linear-gradient(45deg, #617143, #9da582);
  border: none;
  width: 42%;
  border-radius: 15px;
  margin-top: 5%;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  font-size: 1.6rem;
  padding: 3%;
  color: #ffffff;
  margin-bottom: 10%;

  &:hover {
    font-weight: bold;
  }
`;

const Box1 = styled.div`
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 8%;
`;

const B1text = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

const SButton = styled.button`
  width: 7%;
  margin-left: 7%;
  background-color: transparent;
  border: none;

  &:hover {
    color: #000000;
  }
`;

const SImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BS = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-top: 10%;
  align-items: center;
`;

const B1text2 = styled.p`
  font-size: 1.6rem;
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
  white-space: pre-line; /* 공백과 줄바꿈 유지 설정 */
`;

const Bcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 세로축 */
  margin-top: 10%;
  margin-bottom: 10%;
`;
const AppImage = styled.img`
  width: 60%;
  height: 60%;
  margin-top: 10%;
`;
const AppPage = () => {
  const { id } = useParams();
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  const [App, setApp] = useState([]);
  document.body.style = "background: white;";

  const handleButtonClick = () => {};

  useEffect(() => {
    axios.get(`https://forgrandparents.store/detail/${id}`).then((res) => {
      console.log(res.data);
      setApp(res.data);
      console.log(App.app_info?.levelvalue);
      //  setApp5(res.data.level_5);
    });
  }, []);
  const tts = () => {
    const audio = new Audio(App.tts);
    audio.play(); // 음성 파일을 재생합니다.
  };

  return (
    <>
      <TestNavigator></TestNavigator>
      <Desktop>
        <AppNameWrapper>
          <AppName>{App.app_info?.name}</AppName>
        </AppNameWrapper>

        <Con>
          <Circle>
            <Img src={`/L${App.app_info?.levelvalue}.svg`} />
          </Circle>
          <Level>{App.app_info?.summary}</Level>
        </Con>

        <Bcon>
          <Box>
            <AppImage src={App.app_info?.image}></AppImage>
            <BText>{App.app_info?.name}</BText>
            <Button onClick={() => handleButtonClick}>다운로드</Button>
          </Box>

          <Box1>
            <BS>
              <B1text>어떻게 사용할까요?</B1text>
              <SButton onClick={tts}>
                <SImg src="/TestNext.svg" />
              </SButton>
            </BS>

            <B1text2>
              {App.app_info?.detail &&
                App.app_info?.detail
                  .replace(/ • /g, "\n")
                  .replace(/\n/g, "\n\n")}
            </B1text2>
          </Box1>
        </Bcon>
      </Desktop>
    </>
  );
};

export default AppPage;
