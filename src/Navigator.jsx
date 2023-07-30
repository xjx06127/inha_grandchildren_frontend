import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 4.8%;
    padding-right: 4.8%;
    padding-top: 10%;
`

const BackBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BackImg = styled.img`
   width: 45%;
   height: 45%;
   margin-bottom: 7px;
   
`;

const BackText = styled.p`
    color:white;
    font-size: 2.4vh;
`;

const SoundBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SoundImg = styled.img`
   width: 45%;
   height: 45%;
   margin-bottom: 7px;
`;

const SoundText = styled.p`  
    color: white;
    font-size: 2.4vh;
`;


const Navigator = () => {
    const navigate = useNavigate();
    const [isBackClicked,setBackClicked] = useState(false);
    const [isSoundClicked,setSoundClicked] = useState(false);

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

    useEffect(()=>{
        if(isSoundClicked){
            setSoundClicked(false);
        }
    },[isSoundClicked])
    
    return (
       <>
       <Box>

       <BackBox onClick={GoToBack}>
        <BackImg src="/back.svg"/>
        <BackText clicked={isBackClicked}>돌아가기</BackText>
       </BackBox>

       <SoundBox>
        <SoundImg src="/sound.svg"/>
        <SoundText>소리끄기</SoundText>
       </SoundBox>

       </Box>

       </>
    );
};

export default Navigator;