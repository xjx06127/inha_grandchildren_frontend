import React from 'react';
import styled from "styled-components";

const Box = styled.div`
    display: flex;

`

const BackBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const BackImg = styled.img`
    content: url(${(props) => props.src});
    width: 220px;
    height: 150px;
`;

const BackText = styled.p`
    
`;

const SoundBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const SoundImg = styled.img`
    
    
`;

const SoundText = styled.p`  

`;

const Navigator = () => {
    return (
       <>
       <Box>

       <BackBox>
        <BackImg src="/back.png"/>
        <BackText>돌아가기</BackText>
       </BackBox>

       <SoundBox>
        <SoundImg/>
        <SoundText>소리켜기</SoundText>
       </SoundBox>

       </Box>

       </>
    );
};

export default Navigator;