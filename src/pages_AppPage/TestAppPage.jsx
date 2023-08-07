import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TestNavigator from "../pages_Test/TestNavigator";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const GlobalStyles = createGlobalStyle`
  body {
    overflow: ${({ show }) => (show ? "hidden" : "auto")};
  }
`;

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
  border-radius: 13px;
  margin-top: 5%;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  font-size: 1.6rem;
  padding:2%;
  color: #ffffff;
  margin-bottom: 10%;

  &:hover{
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

  &:hover{
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
  margin-top:10%;
`;

const ErrorMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.9);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`

const TextBox = styled.div`
  @media (orientation: portrait) {
    margin-left: 13%;
    margin-top: 60%;
  }
`

const ErrorText1 = styled.h1`
  @media (orientation: landscape) {
    margin-bottom: 2%;
    margin-top: 10%;
    text-align: center;
  }
  margin-bottom: 3%;
  font-size: 2rem;
  font-weight: bold;
`

const ErrorText2 = styled.p`
@media (orientation: landscape) {
    text-align: center;
  }
  font-size: 1.6rem;
  font-weight: bold;
`

const DownImg = styled.img`
  

`

const ErrorText3 = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`

const BackButton = styled.button`
  background: linear-gradient(45deg, #617143, #9da582);
  border: none;
  width: 38%;
  border-radius: 13px;
  font-size: 1.6rem;
  padding:1.4%;
  margin-bottom: 50%;
  margin-top: 2%;
  color: #ffffff;
`

const MidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (orientation: portrait) {
    margin-top: 15%;  
  }
`


const Highlight = styled.span`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffd05d 50%);
`;

const TestAppPage = () => {
  const { id } = useParams();
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  const [App, setApp] = useState([]);
  const [iosUrl,setIosUrl] = useState("");
  const [AndroidUrl,setAndroidUrl] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://forgrandparents.store/detail/${id}`).then((res) => {
      setApp(res.data);
      setIosUrl(res.data.app_info?.alink);
      setAndroidUrl(res.data.app_info?.slink);
      //  setApp5(res.data.level_5);
    });
  }, []);

  const tts = () => {
    const audio = new Audio(App.tts);
    audio.play(); // 음성 파일을 재생합니다.
  };

  const handleButtonClick = () => {
    const mobileType = navigator.userAgent.toLowerCase();

    if (mobileType.indexOf("android") > -1) {
      return window.open(AndroidUrl);
    } else if (
      mobileType.indexOf("iphone") > -1 ||
      mobileType.indexOf("ipad") > -1 ||
      mobileType.indexOf("ipod") > -1
    ) {
      return window.open(iosUrl);
    } else {
      Swal.fire(
        {
          icon: 'error',
          title: '잠시만요!',
          text: '해당 어플은 현재 단말기에서 지원하지 않아요.',
          confirmButtonText: '다른 어플 보러가기',
          confirmButtonColor: '#798560',          
        }
      );
    }
  };
  
  return (
    <>
      <GlobalStyles show={showError} />
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
            <Button onClick={handleButtonClick}>다운로드</Button>
          </Box>

          <Box1>
            <BS>
              <B1text>어떻게 사용할까요?</B1text>
              <SButton onClick={tts}>
                <SImg src="/TestNext.svg" />
              </SButton>
            </BS>
            
          <B1text2>{App.app_info?.detail && App.app_info?.detail.replace(/ • /g, '\n').replace(/\n/g, '\n\n')}</B1text2>
          </Box1>
        </Bcon>
      </Desktop>
    </>
  );
};

export default TestAppPage;
