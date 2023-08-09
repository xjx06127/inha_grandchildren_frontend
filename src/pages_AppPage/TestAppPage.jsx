import React, { useEffect, useState, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import AppPageNavigator from "./AppPageNavigator";
import Swal from "sweetalert2";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";

const GlobalStyles = createGlobalStyle`
  body {
    overflow: ${({ show }) => (show ? "hidden" : "auto")};
  }
`;

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #ffffff;
  width: 100%;
  margin-bottom: 10%;
`;

const Ccon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 25vw;
  height: 25vw;
  background-color: #617143;
  border-radius: 50%; /* 50%로 설정하여 원 모양 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "50%";
      case "large":
        return "60%";
      case "veryLarge":
        return "70%";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "50%";
      case "large":
        return "60%";
      case "veryLarge":
        return "70%";
    }
  }};
`;

const NameWrapper = styled.div`
  justify-content: center;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const Name = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
`;

const Number = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  font-weight: bold;
`;

const Icon1 = styled.img`
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "9%";
      case "large":
        return "12%";
      case "veryLarge":
        return "15%";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "9%";
      case "large":
        return "12%";
      case "veryLarge":
        return "15%";
    }
  }};
  margin-right: 2%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  align-items: center;
`;

const AppImage = styled.img`
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "60%";
      case "large":
        return "65%";
      case "veryLarge":
        return "70%";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "60%";
      case "large":
        return "65%";
      case "veryLarge":
        return "70%";
    }
  }};
  margin-top: 10%;
  border-radius: 5px;
`;

const BText = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-top: 3%;
  text-align: center; /* 내용을 가로축으로 가운데 정렬 */
  font-weight: bold;
`;

const Level = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #617143, #9da582);
  border: none;
  width: 42%;
  border-radius: 13px;
  margin-top: 8%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  padding: 2%;
  color: #ffffff;
  margin-bottom: 10%;

  &:hover {
    font-weight: bold;
  }
`;

const Box1 = styled.div`
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 8%;
`;

const B1text = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
  font-weight: bold;
`;

const B1text2 = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
  white-space: pre-line; /* 공백과 줄바꿈 유지 설정 */
`;

const Bcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 세로축 */
  margin-top: 10%;
  margin-bottom: 10%;
`;

const Box2 = styled.div`
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 8%;
`;

const B2text = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
  font-weight: bold;
`;
const B2text2 = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
`;

const Icon = styled.img`
  width: 35%;
  height: 35%;
`;
const Button2 = styled.button`
  background: linear-gradient(45deg, #617143, #9da582);
  border: none;
  width: 45%;
  height: 30%;
  border-radius: 13px;
  padding: 2%;
  color: #ffffff;
  margin-left: 10%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  &:hover {
    font-weight: bold;
  }
`;

const Con = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #ffd05d 50%);
`;

const ErrorMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.9);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

const TextBox = styled.div`
  @media (orientation: portrait) {
    margin-left: 13%;
    margin-top: 60%;
  }
`;

const ErrorText1 = styled.h1`
  @media (orientation: landscape) {
    margin-bottom: 2%;
    margin-top: 10%;
    text-align: center;
  }
  margin-bottom: 3%;
  font-size: 2rem;
  font-weight: bold;
`;

const ErrorText2 = styled.p`
  @media (orientation: landscape) {
    text-align: center;
  }
  font-size: 1.6rem;
  font-weight: bold;
`;

const DownImg = styled.img``;

const ErrorText3 = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

const BackButton = styled.button`
  background: linear-gradient(45deg, #617143, #9da582);
  border: none;
  width: 38%;
  border-radius: 13px;
  font-size: 1.6rem;
  padding: 1.4%;
  margin-bottom: 50%;
  margin-top: 2%;
  color: #ffffff;
`;

const MidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (orientation: portrait) {
    margin-top: 15%;
  }
`;

const TtsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #617143;
  position: fixed;
  width: 25vw;
  height: 25vw;
  opacity: 0.8;
  right: 0%;
`;

const TtsImg = styled.img`
  content: url("/sound.svg");
  width: 50%; /* Adjust the size of the image as needed */
  height: auto;
`;

const FixBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5%;
  right: 5%;
`;

const ToolTip = styled.img`
  content: url("/speechBubble.svg");
  width: 90%;
  height: auto;
  position: relative; /* Add this line */
  top: -70px; /* Adjust this value to move the tooltip up or down */
  z-index: -1;
`;

const ToolTipText = styled.p`
  position: absolute;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  top: -55px; /* Adjust this value to position the text as needed */
  left: 50%;
  transform: translateX(-50%);
`;

const TestAppPage = () => {
  const { id } = useParams();
  const [App, setApp] = useState([]);
  const [iosUrl, setIosUrl] = useState("");
  const [AndroidUrl, setAndroidUrl] = useState("");
  const [showError, setShowError] = useState(false);
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  const [showToolTip, setShowToolTip] = useState(true);
  useEffect(() => {
    const toolTipTimeout = setTimeout(() => {
      setShowToolTip(false);
    }, 5000);

    return () => {
      clearTimeout(toolTipTimeout);
    };
  }, []);

  useEffect(() => {
    axios.get(`https://forgrandparents.store/detail/${id}`).then((res) => {
      setApp(res.data);
      setIosUrl(res.data.app_info?.alink);
      setAndroidUrl(res.data.app_info?.slink);
      //  setApp5(res.data.level_5);
    });
  }, [like]);

  const handleButtonClick = () => {
    const mobileType = navigator.userAgent.toLowerCase();
    const isMac = /MacIntel|MacPPC/i.test(navigator.platform);
    //대소문자를 구분하지 않도록 옵션 설정 (i)

    //안드로이드 기종인 경우
    if (mobileType.indexOf("android") > -1) {
      //Googleplay스토어에 없는 경우
      if (AndroidUrl === null) {
        Swal.fire({
          icon: "error",
          title: "잠시만요!",
          text: "해당 어플은 현재 단말기에서 지원하지 않아요.",
          confirmButtonText: "다른 어플 보러가기",
          confirmButtonColor: "#798560",
        });
      }
      //Googleplay스토어에 있는 경우
      return window.open(AndroidUrl);
    }

    //애플 기종인 경우
    else if (
      mobileType.indexOf("iphone") > -1 ||
      mobileType.indexOf("ipad") > -1 ||
      mobileType.indexOf("ipod") > -1
    ) {
      if (iosUrl === null) {
        Swal.fire({
          icon: "error",
          title: "잠시만요!",
          text: "해당 어플은 현재 단말기에서 지원하지 않아요.",
          confirmButtonText: "다른 어플 보러가기",
          confirmButtonColor: "#798560",
        });
      }
      return window.open(iosUrl);
    }
    //현재 데스크톱인 경우
    else if (isMac) {
      //Mac인경우
      window.open(iosUrl);
    } else window.open(AndroidUrl); //Mac이 아닌 경우
  };

  const handleButtonClick2 = async () => {
    let arr = JSON.parse(localStorage.getItem("isRecoArr"));
    if (arr[parseInt(id)] === false) {
      try {
        await axios.post(`https://forgrandparents.store/detail/${id}`);
        arr[parseInt(id)] = true;
        localStorage.setItem("isRecoArr", JSON.stringify(arr));

        // 좋아요 개수 업데이트 요청을 보낸 후 서버 응답을 기다리기
        const response = await axios.get(
          `https://forgrandparents.store/detail/${id}`
        );
        const updatedLikeCount = response.data.app_info.like;

        // 화면 업데이트
        setLike(true);
        const updatedApp = {
          ...App,
          app_info: { ...App.app_info, like: updatedLikeCount },
        };
        setApp(updatedApp);

        Swal.fire({
          icon: "success",
          title: "추천 완료",
          showConfirmButton: false,
          timer: 3000,
        });
      } catch (error) {
        console.error("Error occurred while updating like:", error);
      }
    } else if (arr[parseInt(id)] === true) {
      Swal.fire({
        icon: "error",
        title: "잠시만요!",
        text: "중복 추천은 불가해요.",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <>
      <GlobalStyles show={showError} />
      <AppPageNavigator></AppPageNavigator>
      <Desktop>
        <Ccon>
          <Circle>
            <Img fS={fontSize} src={`/L${App.app_info?.levelvalue}.svg`} />
          </Circle>
        </Ccon>

        <NameWrapper>
          <Icon1 src="/Rec.svg" fS={fontSize}></Icon1>
          <Number fS={fontSize}>{App.app_info?.like}명</Number>
          <Name fS={fontSize}>의 추천을 받은 어플</Name>
        </NameWrapper>

        <Bcon>
          <Box>
            <AppImage fS={fontSize} src={App.app_info?.image}></AppImage>
            <BText fS={fontSize}>{App.app_info?.name}</BText>
            <Level fS={fontSize}>{App.app_info?.summary}</Level>
            <Button onClick={handleButtonClick} fS={fontSize}>
              다운로드
            </Button>
          </Box>

          <Box1>
            <B1text fS={fontSize}>어떻게 사용할까요?</B1text>
            <B1text2 fS={fontSize}>
              {App.app_info?.detail &&
                App.app_info?.detail
                  .replace(/ • /g, "\n")
                  .replace(/\n/g, "\n\n")}
            </B1text2>
          </Box1>

          <Box2>
            <B2text fS={fontSize}>
              어플이
              <br /> <Highlight fS={fontSize}>마음에 드신다면?</Highlight>
            </B2text>
            <B2text2 fS={fontSize}>
              다른 분들을 위해 <br />
              추천해주세요.
            </B2text2>
            <Con>
              <Icon src="/Rec.svg"></Icon>
              <Button2 fS={fontSize} onClick={handleButtonClick2}>
                나도 추천
              </Button2>
            </Con>
          </Box2>
        </Bcon>
        <FixBox>
          <ToolTipText>이곳을 클릭하여 어플 설명을 들어보세요.</ToolTipText>

          <ToolTip />
          <TtsBtn>
            <TtsImg />
          </TtsBtn>
        </FixBox>
      </Desktop>
    </>
  );
};

export default TestAppPage;
