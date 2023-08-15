import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 7%;
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

const GrayNavigator = () => {
  const navigate = useNavigate();
  const initialSoundOffValue = localStorage.getItem("soundOff") === "true"; //true인 경우 true반환
  const [isSoundOffClicked, setSoundOffClicked] =
    useState(initialSoundOffValue);
  const location = useLocation();
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  //소리 제어
  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    const speakText = (text) => {
      utterance.text = text;
      utterance.rate = 0.8;
      synth.speak(utterance);
    };

    if (isSoundOffClicked) {
      synth.cancel();
    } else if (location.pathname === "/AppFind") {
      speakText(
        "어떤 기능이 필요하신가요? 아래의 버튼 중 하나를 선택해주세요."
      );
    }
    //생활편의
    else if (location.pathname === "/LivingAppsFind1") {
      speakText("지금 필요하신 것이 무엇인가요?");
    } else if (location.pathname === "/LivingAppsFind1") {
      speakText("지금 필요하신 것이 무엇인가요?");
    } else if (location.pathname === "/FinanceAppsFind") {
      speakText("어떤 분야를 찾으시나요?");
    } else if (location.pathname === "/SearchLoadsAppsFind") {
      speakText("어떤 분야를 찾으시나요?");
    } else if (location.pathname === "/DeliveryAppsFind") {
      speakText("어떤 분야를 찾으시나요?");
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/은행`)
    ) {
      speakText(
        "은행과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/주식`)
    ) {
      speakText(
        "주식과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/간편결제`)
    ) {
      speakText(
        "간편 결제와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/날씨`)
    ) {
      speakText(
        "날씨와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/지도`)
    ) {
      speakText(
        "지도와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/지하철`)
    ) {
      speakText(
        "지하철과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/버스`)
    ) {
      speakText(
        "버스와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/택시`)
    ) {
      speakText(
        "택시와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/배달 음식`)
    ) {
      speakText(
        "배달 음식과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) ===
      decodeURI(`/AppsFindResult/식료품 및 생활용품 배송`)
    ) {
      speakText(
        "식료품 및 생활용품 배송과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI(`/AppsFindResult/일정 관리`)
    ) {
      speakText(
        "일정관리와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    }

    //취미
    else if (location.pathname === "/HobbyAppTest1") {
      speakText("내부 혹은 외부 중, 어디에서 활동하시는 걸 좋아하시나요?");
    } else if (location.pathname === "/IndoorAppsFind") {
      speakText("어떤 활동을 좋아하시나요?");
    } else if (location.pathname === "/OutdoorAppsFind") {
      speakText("어떤 활동을 좋아하시나요?");
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/독서")
    ) {
      speakText(
        "독서와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/여행")
    ) {
      speakText(
        "여행과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/낚시")
    ) {
      speakText(
        "낚시와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/등산")
    ) {
      speakText(
        "등산과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    }

    //소통
    else if (location.pathname === "/CommunityAppsFind") {
      speakText("어느 것이 필요하신가요?");
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/연락")
    ) {
      speakText(
        "연락과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/일상공유")
    ) {
      speakText(
        "일상 공유와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    }

    //건강
    else if (location.pathname === "/HealthyAppTest1") {
      speakText("어느 것이 필요하신가요?");
    } else if (location.pathname === "/HealthCareAppsFind") {
      speakText("어떤 관리가 필요하신가요?");
    } else if (location.pathname === "/TreatmentAppsFind") {
      speakText("어떤 것이 필요하신가요?");
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/식단")
    ) {
      speakText(
        "식단과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/수면")
    ) {
      speakText(
        "수면과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/운동")
    ) {
      speakText(
        "운동과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/진료")
    ) {
      speakText(
        "진료와 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    } else if (
      decodeURI(location.pathname) === decodeURI("/AppsFindResult/운동")
    ) {
      speakText(
        "운동과 관련된 어플을 찾아봤어요! 해당 어플이 궁금하시다면, 자세히 버튼을 눌러보세요!"
      );
    }

    return () => {
      synth.cancel();
    };
  }, [isSoundOffClicked, location.pathname]);

  const GoToBack = () => {
    navigate(-1);
  };

  //소리 버튼 클릭 시, alert창 생성
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
          <BackImg fS={fontSize} src="/grayback.svg" />
          <BackText fS={fontSize}>돌아가기</BackText>
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

export default GrayNavigator;
