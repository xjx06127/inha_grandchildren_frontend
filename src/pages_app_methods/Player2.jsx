import React from 'react';
import styled from "styled-components";
import BackNavigator from '../BackNavigator';
import ReactPlayer from "react-player/lazy";

const BackGround = styled.div`
  background-color: black;
  height: 100%;
`;

const Videobox = styled.div`
  margin-left: 10%;
`;

const Player2 = () => {
    return (
        <>
        <BackGround>
            <BackNavigator/>
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
        </BackGround>
        </>
    );
};

export default Player2;