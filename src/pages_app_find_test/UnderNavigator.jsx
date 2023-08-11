import React from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeButton = styled.div`
  color: #5f5f5f;
  font-size: 1.3rem;
  margin-bottom: 10%;
  text-align: center;
  font-family: "MICE";
`;

const HomeIcon = styled.img`
  width: 8%;
  height: 8%;
  margin-top: 10%;
`


const UnderNavigator = () => {
    const navigate = useNavigate();

    

    return (
      <>
        <Box>
          <HomeIcon src='/GoHome.svg' onClick={()=>navigate('/Main')}/>
          <HomeButton>홈으로</HomeButton>
        </Box>
      
      </>
    );
};

export default UnderNavigator;