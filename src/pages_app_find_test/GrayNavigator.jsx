import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 4.8%;
    padding-right: 4.8%;
    padding-top: 7%;
`

const BackBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BackImg = styled.img`
   width: 40%;
   height: 40%;
   margin-bottom: 7px;
`;

const BackText = styled.p`
    color: #5F5F5F;
    font-size: 1rem;
`;

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
    color: #5F5F5F;
    font-size: 1rem;
`;


const GrayNavigator = () => {
    const navigate = useNavigate();
    const [isBackClicked,setBackClicked] = useState(false);
    const [isSoundOffClicked,setSoundOffClicked] = useState(false);

    const GoToBack = () => {
        setBackClicked(true);
        setTimeout(() => {
            navigate(-1);
        }, 250); 
    };

    useEffect(()=>{
        if(isBackClicked){
            setBackClicked(false);
        }
    },[isBackClicked])

    const handleControlSound = () => {
        setSoundOffClicked(!isSoundOffClicked);
    }

    return (
       <>
       <Box>

       <BackBox onClick={GoToBack} >
        <BackImg src="/grayback.svg"/>
        <BackText clicked={isBackClicked}>돌아가기</BackText>
       </BackBox>

       <SoundBox>
        <SoundImg 
        src={isSoundOffClicked ? '/soundoff_gray.svg' : '/graysound.svg'}
        onClick={handleControlSound}/>
        <SoundText>{
            isSoundOffClicked ? '소리 켜기' : '소리 끄기'
            }</SoundText>
       </SoundBox>

       </Box>

       </>
    );
};

export default GrayNavigator;