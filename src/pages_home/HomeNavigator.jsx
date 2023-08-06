import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Box = styled.div`
    display: flex;
    justify-content: end;
    padding-left: 4.8%;
    padding-right: 4.8%;
    padding-top: 7%;
`
const SoundBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SoundImg = styled.img`
   width: 40%;
   @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 3vh;
    }
   margin-bottom: 7px;
`;

const SoundText = styled.p`  
    color: white;
    font-size: 1rem;
`;


const HomeNavigator = () => {
    const [isSoundOffClicked,setSoundOffClicked] = useState(false);
    
    const handleControlSound = () => {
        setSoundOffClicked(!isSoundOffClicked);
    }

    return (
       <>
       <Box>
       <SoundBox>
        <SoundImg 
        src={isSoundOffClicked ? '/soundoff_white.svg' : '/sound.svg'}
        onClick={handleControlSound}/>
        <SoundText>{
            isSoundOffClicked ? '소리 켜기' : '소리 끄기'
            }</SoundText>
       </SoundBox>
       </Box>

       </>
    );
};

export default HomeNavigator;