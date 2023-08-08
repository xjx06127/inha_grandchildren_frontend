import React, { useContext } from "react";
import styled, { css } from "styled-components";
import GrayNavigator from "../GrayNavigator";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { FontSizeContext } from "../../pages_font_context/FontSizeProvider";

const BackGround = styled.div`
  background-color: #f7f7f7;
  background-size: cover;
  width: 100vw;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 100vh;
  }
  margin: 0;
`;

const MidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 9%;
`;

const ImgArea = styled.img``;
const MainText = styled.p`
  margin-top: 5%;
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
  text-align: center;
  font-weight: 600;
`;

const HighLight = styled.span`
  font-weight: 900;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.7rem";
      case "large":
        return "2.0rem";
      case "veryLarge":
        return "2.3rem";
    }
  }};
`;

const SubText = styled.p`
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
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
  font-weight: bold;
  color: rgba(0, 0, 0, 0.47);
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Row1 = styled.div`
  display: flex;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
  }
  @media (orientation: landscape) {
    /* Set the height specifically for portrait mode */
    height: 50vh;
  }
`;

const Row2 = styled.div`
  display: flex;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
  }
`;

const Row3 = styled.div`
  display: flex;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border: none;
  width: 46vw;
  margin: 3%;
  padding: 2%;

  &:hover {
    transition: 0.1s;
    background-color: #efc5b9;
  }
`;

const SelText = styled.p`
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
  font-weight: bold;
`;

const CommunityAppTest = () => {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);

  const GoToConnectPage = () => {
    setTimeout(() => {
      navigate(`/AppsFindResult/연락`);
    }, 100);
  };

  const GoToSharePage = () => {
    setTimeout(() => {
      navigate(`/AppsFindResult/일상공유`);
    }, 100);
  };

  return (
    <>
      <BackGround>
        <GrayNavigator />
        <MidBox>
          <ImgArea src="/hi.svg" />
          <MainText fS={fontSize}>
            <HighLight fS={fontSize}>어느 것</HighLight>이<br />
            필요하신가요?
          </MainText>
          <SubText fS={fontSize}>아래의 버튼 중 하나를 선택해주세요.</SubText>
        </MidBox>
        <SelectBox>
          <Row1>
            <Box onClick={GoToConnectPage}>
              <SelText fS={fontSize}>연락</SelText>
            </Box>
            <Box onClick={GoToSharePage}>
              <SelText fS={fontSize}>일상 공유</SelText>
            </Box>
          </Row1>
        </SelectBox>
      </BackGround>
    </>
  );
};

export default CommunityAppTest;
