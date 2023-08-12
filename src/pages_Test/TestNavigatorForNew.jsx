import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import Swal from "sweetalert2";

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
  /* font-size: 1rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1rem";
      case "large":
        return "1.3rem";
      case "veryLarge":
        return "1.6rem";
    }
  }};
`;

const TestNavigatorNew = () => {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext); 
  const initialSoundOffValue = localStorage.getItem('soundOff') === 'true';
  const [isSoundOffClicked, setSoundOffClicked] = useState(initialSoundOffValue);
  const location = useLocation();


  useEffect(() => {
    console.log(isSoundOffClicked);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    const speakText = (text) => {
      utterance.text = text;
      utterance.rate = 0.8;
      synth.speak(utterance);
    };

    if (isSoundOffClicked) {
      synth.cancel();
    } else if (location.pathname.includes('TestForNew')){
      console.log(location.pathname);
      speakText("회원가입을 성공해 보셨나요?");
    }

    return () => {
      synth.cancel();
    };
  }, [isSoundOffClicked, location.pathname]);


  //소리 버튼 클릭 시
  const handleControlSound = () => {
    setSoundOffClicked(!isSoundOffClicked);
    localStorage.setItem('soundOff', !isSoundOffClicked);

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    
    isSoundOffClicked === true
      ? Toast.fire({
          icon: "success",
          title: "음성 지원 소리를 켰습니다.",
        })
      : Toast.fire({
          icon: "success",
          title: "음성 지원 소리를 껐습니다.",
        });
  }

  return (
    <>
      <Box>
        <SoundBox>
          <SoundImg 
          src={isSoundOffClicked ? '/soundoff_gray.svg' : '/graysound.svg'} onClick={handleControlSound}/>
          <SoundText fS={fontSize}>{isSoundOffClicked ? '소리 켜기' : '소리 끄기'}</SoundText>
        </SoundBox>
      </Box>
    </>
  );
};

export default TestNavigatorNew;
