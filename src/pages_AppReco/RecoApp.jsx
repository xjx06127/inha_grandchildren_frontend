import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavigatorApp from "./NavigatorApp";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AppPage from "../pages_AppPage/AppPage";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import Fade from "react-reveal/Fade";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #617143;
  width: 100%;
  font-family: "MICE";
`;

const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 50px 50px 0px 0px; /* 상단 모서리에만 border-radius를 적용 */
  background-color: #ffffff;
  padding-bottom: 10%;
  margin-top: 12%;
`;

const Img = styled.img`
  width: 60%;
  height: 60%;
`;
const Text = styled.p`
  font-weight: bold;
  /* font-size: 1.9rem; */
  margin-top: 2%;
  margin-bottom: 10%;
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

const Ibox = styled.div`
  @media (orientation: portrait) {
    height: 12vh; /* 뷰포트 높이의 10%로 높이 설정 */
    width: 12vh; /* 뷰포트 높이의 10%로 너비 설정 */
  }

  /* 미디어 쿼리: 가로 방향 (landscape)일 때 */
  @media (orientation: landscape) {
    height: 50vh; /* 뷰포트 높이의 50%로 높이 설정 */
    width: 50vh; /* 뷰포트 높이의 50%로 너비 설정 */
  }
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -12%;
`;

const CBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가로축 가운데 정렬 */
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5%;
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
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 7%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
  /* font-size: 1.3rem; */
  color: #617143;
  text-decoration: underline;
  font-family: "MICE";
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

  &:hover {
    font-weight: bold;
  }
`;

const Title = styled.p`
  /* font-size: 1.6rem; */
  text-align: left;
  margin-left: 5%;
  font-weight: bold;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2em";
    }
  }};
`;

const TB = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const AppImage = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 5px;
`;

const RecoApp = () => {
  const [App, setApp] = useState([]);
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: white;";

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`https://forgrandparents.store/applist/`).then((res) => {
      setApp(res.data.top_app);
      console.log(res.data);
    });
  }, []);

  const handleButtonClick = (id) => {
    setTimeout(() => {
      navigate(`../AppPage/${id}`);
    }, 100);
  };

  return (
    <>
      <Desktop>
        <NavigatorApp />

        <Rectangle>
          <CBox>
            <Ibox>
              <Img src="/Star1.svg"></Img>
            </Ibox>
            <Text fS={fontSize}>손주의 추천</Text>
          </CBox>

          {/* {App.map((element) => (
              <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number>{element.like}명</Number><Name>이 추천해요!</Name>
              </NameWrapper>
            ))} */}

          {App.map((element, index) => (
            <Fade bottom delay={index * 100}>
              <div>
                <NameWrapper>
                  <Icon1 src="/Rec.svg"></Icon1>
                  <Number fS={fontSize}>{element.like}명</Number>
                  <Name fS={fontSize}>이 추천해요!</Name>
                </NameWrapper>
                <Box key={index}>
                  <AppImage src={element.image} />
                  <TB>
                    <Title fS={fontSize}>{element.name}</Title>
                    <Button
                      onClick={() => handleButtonClick(element.id)}
                      fS={fontSize}
                    >
                      자세히
                    </Button>
                  </TB>
                </Box>
              </div>
            </Fade>
          ))}
        </Rectangle>
      </Desktop>
    </>
  );
};

export default RecoApp;
