import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import BackNavigator from "../BackNavigator";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #ffd05d 50%);
  border-radius: 3px;
`;

const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
  @media (orientation: portrait) {
    height: 40vh;
  }
  @media (orientation: landscape) {
    height: 90vh;
  }
  font-family: "MICE";
`;
const Text = styled.h1`
  color: #ffffff;
  margin-left: 10%;
  padding-top: 2%;
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

const Title = styled.div`
  /* font-size: 1.6rem; */
  color: black;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
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

const Videobox = styled.div`
  margin-left: 10%;
`;

const Icon = styled.img`
  width: 80px;
  height: 60px;
  padding-left: 10%;
  padding-top: 7%;
`;

const App_methods = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: white;";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackGround>
        <BackNavigator />
        <Icon src="/videoIcon.svg"></Icon>
        <Text fS={fontSize}>
          직접 <Highlight>동영상으로</Highlight>
          <br />
          알려드릴게요🐥
        </Text>
        <Videobox>
          <ReactPlayer
            url="video.mp4"
            width="90%"
            height="20%"
            // playing={true}
            muted={true}
            controls={true}
            loop={true}
          />
        </Videobox>
        <Title fS={fontSize}>'손주야~'사용영상 </Title>
        <Videobox>
          <ReactPlayer
            url="KakaoTalk_20230815_162726022.mp4"
            width="90%"
            height="20%"
            // playing={true}
            muted={true}
            controls={true}
            loop={true}
          />
        </Videobox>
        <Title fS={fontSize}>어플삭제는 이렇게 해요 </Title>
        <Videobox>
          <ReactPlayer
            url="video3.mp4"
            width="90%"
            height="20%"
            // playing={true}
            muted={true}
            controls={true}
            loop={true}
          />
        </Videobox>
        <Title fS={fontSize}>친구에게도 알려주고 싶으실 땐요,</Title>
      </BackGround>
    </>
  );
};

export default App_methods;
