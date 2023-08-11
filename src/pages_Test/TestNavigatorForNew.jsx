import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 5%;
  padding-bottom: 3%;
  font-family: 'MICE';
`;

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
  color: rgba(95, 95, 95, 1);
  font-size: 1rem;
`;

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
  color: rgba(95, 95, 95, 1);
  font-size: 1rem;
`;

const handleControlSound = () => {

}

const TestNavigatorNew = () => {
  const navigate = useNavigate();
  const initialSoundOffValue = localStorage.getItem('soundOff') === 'true';
  const [isSoundOffClicked, setSoundClicked] = useState(initialSoundOffValue);
 

  useEffect(() => {
    if (isSoundOffClicked) {
      setSoundClicked(false);
    }
  }, [isSoundOffClicked]);

  return (
    <>
      <Box>
        <SoundBox>
          <SoundImg src="/TestNext.svg" onClick={handleControlSound}/>
          <SoundText>소리끄기</SoundText>
        </SoundBox>
      </Box>
    </>
  );
};

export default TestNavigatorNew;
