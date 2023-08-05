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
   height: 40%;
   margin-bottom: 7px;
`;

const SoundText = styled.p`  
    color: white;
    font-size: 1rem;
`;


const HomeNavigator = () => {
    const navigate = useNavigate();
    const [isSoundClicked,setSoundClicked] = useState(false);

    useEffect(()=>{
        if(isSoundClicked){
            setSoundClicked(false);
        }
    },[isSoundClicked])
    
    return (
       <>
       <Box>
       <SoundBox>
        <SoundImg src="/sound.svg"/>
        <SoundText>소리끄기</SoundText>
       </SoundBox>
       </Box>

       </>
    );
};

export default HomeNavigator;