import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 5%;
  padding-bottom: 3%;
  font-family: "MICE";
`;

const BackBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackImg = styled.img`
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "30px";
      case "large":
        return "36px";
      case "veryLarge":
        return "45px";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "24px";
      case "large":
        return "27px";
      case "veryLarge":
        return "34px";
    }
  }};
  margin-bottom: 7px;
`;

const BackText = styled.p`
  color: rgba(95, 95, 95, 1);
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
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "30px";
      case "large":
        return "36px";
      case "veryLarge":
        return "45px";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "24px";
      case "large":
        return "27px";
      case "veryLarge":
        return "34px";
    }
  }};
  margin-bottom: 7px;
`;

const SoundText = styled.p`
  color: rgba(95, 95, 95, 1);
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

const TestNavigator = () => {
  const navigate = useNavigate();
  const [isBackClicked, setBackClicked] = useState(false);
  const initialSoundOffValue = localStorage.getItem("soundOff") === "true";
  const [isSoundOffClicked, setSoundOffClicked] =
    useState(initialSoundOffValue);
  const { fontSize, setFontSize } = useContext(FontSizeContext);
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
    } else if (location.pathname.includes("Test2")) {
      console.log(location.pathname);
      speakText("인터넷 뱅킹을 쓰시나요?");
    } else if (location.pathname.includes("Test3")) {
      console.log(location.pathname);
      speakText("어플 설치를 3번이상 해보셨나요?");
    } else if (location.pathname.includes("Test4")) {
      console.log(location.pathname);
      speakText("로그인이 어려우신가요?");
    } else if (location.pathname.includes("Test5")) {
      console.log(location.pathname);
      speakText("어플 삭제를 해보셨나요?");
    } else if (location.pathname.includes("Test")) {
      console.log(location.pathname);
      speakText("회원가입을 성공해 보셨나요?");
    } else if (location.pathname.includes("Result")) {
      const oCount = (location.pathname.match(/O/g) || []).length;
      switch (oCount) {
        case 0:
          speakText("씨앗은 레벨1 입니다. 레벨 5인 나무 레벨까지 올려보세요!");
          break;
        case 1:
          speakText("새싹은 레벨2 입니다. 레벨 5인 나무 레벨까지 올려보세요!");
          break;
        case 2:
          speakText("꽃은 레벨3 입니다. 레벨 5인 나무 레벨까지 올려보세요!");
          break;
        case 3:
          speakText("열매는 레벨4 입니다. 레벨 5인 나무 레벨까지 올려보세요!");
          break;
        case 4:
          speakText("열매는 레벨4 입니다. 레벨 5인 나무 레벨까지 올려보세요!");
          break;
        case 5:
          speakText("당신은 디지털 끝판왕!😉");
          break;
      }
    }

    return () => {
      synth.cancel();
    };
  }, [isSoundOffClicked, location.pathname]);

  const GoToBack = () => {
    setBackClicked(true);
    setTimeout(() => {
      navigate(-1);
    }, 250);
  };

  useEffect(() => {
    if (isBackClicked) {
      setBackClicked(false);
    }
  }, [isBackClicked]);

  //소리 버튼 클릭 시
  const handleControlSound = () => {
    setSoundOffClicked(!isSoundOffClicked);
    localStorage.setItem("soundOff", !isSoundOffClicked);

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

  return (
    <>
      <Box>
        <BackBox onClick={GoToBack}>
          <BackImg fS={fontSize} src="/TestBack.svg" />
          <BackText clicked={isBackClicked} fS={fontSize}>
            돌아가기
          </BackText>
        </BackBox>

        <SoundBox onClick={handleControlSound}>
          <SoundImg
            fS={fontSize}
            src={isSoundOffClicked ? "/soundoff_gray.svg" : "/graysound.svg"}
          />
          <SoundText fS={fontSize}>
            {isSoundOffClicked ? "소리 켜기" : "소리 끄기"}
          </SoundText>
        </SoundBox>
      </Box>
    </>
  );
};

export default TestNavigator;
