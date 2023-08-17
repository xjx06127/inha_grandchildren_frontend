import React from "react";
import styled from "styled-components";
import BackNavigator from "../BackNavigator";
import ReactPlayer from "react-player/lazy";

const BackGround = styled.div`
  background-color: black;
  height: 100%;
  @media (orientation: landscape) {
    height: auto;
  }
`;

const Videobox = styled.div`
  margin-left: 10%;
  margin-top: 10%;
`;

const Player1 = () => {
  document.body.style = "background:black;";

  return (
    <>
      <BackGround>
        <BackNavigator />
        <Videobox>
          <ReactPlayer
            url="nnewuse.mp4"
            width="90%"
            height="20%"
            playing={true}
            muted={false}
            controls={true}
            loop={false}
          />
        </Videobox>
      </BackGround>
    </>
  );
};

export default Player1;
