import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/lazy';


const BackGround = styled.div`
    background-image: url(/mainBackground.png);
    width: 100vw; 
    height: 40vh;
    background-size: cover;
    border-radius: 0 0 50px 60px / 0 0 12px 19px;
`


const Text = styled.h1`
  color: #ffffff;
  margin-left: 10%;
  padding-top: 5%;
margin-bottom: 10%;

`;

const Title=styled.div`
font-size:1.6rem;
color:black;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 5%;
`

const Videobox=styled.div`
    margin-left: 10%;
`

const Icon = styled.img`
  width: 80px;
  height: 60px;
padding-left: 10%;
padding-top: 15%;
`;


const App_methods = () => {
    return (
<>
<BackGround>
    <Icon src="/videoIcon.svg"></Icon>
<Text>직접 동영상으로<br/>알려드릴게요🐥</Text>
<Videobox>
<ReactPlayer
    url='video.mp4'
    width='90%'
    height='20%'
    // playing={true}
    muted={true}
    controls={true}
    loop={true}
    />
</Videobox>
<Title>'손주야~'사용영상 </Title>
<Videobox>
<ReactPlayer
    url='video2.mp4'
    width='90%'
    height='20%'
    // playing={true}
    muted={true}
    controls={true}
    loop={true}
    />
</Videobox>
<Title>삭제는 이렇게 해요 </Title>
<Videobox>
<ReactPlayer
    url='video3.mp4'
    width='90%'
    height='20%'
    // playing={true}
    muted={true}
    controls={true}
    loop={true}
    />
</Videobox>
<Title>친구에게도 알려주고 싶으실 땐요,</Title>
</BackGround>
</>
    );
};

export default App_methods;