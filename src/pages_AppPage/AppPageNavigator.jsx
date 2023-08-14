import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import Swal from "sweetalert2";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 7%;
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
  color: #5f5f5f;
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
  color: #5f5f5f;
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

const AppPageNavigator = () => {
  const navigate = useNavigate();
  const [isBackClicked, setBackClicked] = useState(false);
  const [isSoundOffClicked, setSoundOffClicked] = useState(false);
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const GoToBack = () => {
    setBackClicked(true);
    navigate(-1);
  };

  useEffect(() => {
    if (isBackClicked) {
      setBackClicked(false);
    }
  }, [isBackClicked]);

  const handleControlSound = () => {
    setSoundOffClicked(!isSoundOffClicked);
    localStorage.setItem('soundOff',!isSoundOffClicked);

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
  };

  // const tts = () => {
  //     const audio = new Audio(App.tts);
  //     audio.play(); // 음성 파일을 재생합니다.
  //   };

  return (
    <>
      <Box>
        <BackBox onClick={GoToBack}>
          <BackImg src="/grayback.svg" />
          <BackText clicked={isBackClicked} fS={fontSize}>
            돌아가기
          </BackText>
        </BackBox>

        
      </Box>
    </>
  );
};

export default AppPageNavigator;
