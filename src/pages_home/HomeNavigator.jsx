import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import Swal from "sweetalert2";

const Box = styled.div`
  display: flex;
  justify-content: end;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 7%;
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
  color: white;
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

const HomeNavigator = () => {
  const [isSoundOffClicked, setSoundOffClicked] = useState(false);
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const handleControlSound = () => {
    setSoundOffClicked(!isSoundOffClicked);
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1200,
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

  return (
    <>
      <Box>
        <SoundBox>
          <SoundImg
            src={isSoundOffClicked ? "/soundoff_white.svg" : "/sound.svg"}
            onClick={handleControlSound}
          />
          <SoundText fS={fontSize}>
            {isSoundOffClicked ? "소리 켜기" : "소리 끄기"}
          </SoundText>
        </SoundBox>
      </Box>
    </>
  );
};

export default HomeNavigator;