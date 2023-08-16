import React, { useContext } from "react";
import styled, { css } from "styled-components";
import HomeNavigator from "./HomeNavigator";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import ContactUs from "../ContactUs";
import Swal from "sweetalert2";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
  @media (orientation: portrait) {
    height: 40vh;
  }
  @media (orientation: landscape) {
    height: 90vh;
  }
  font-family: "MICE";
`;

const MainText = styled.h1`
  color: white;
  /* font-size: 1.9rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.9rem";
      case "large":
        return "2.2rem";
      case "veryLarge":
        return "2.5rem";
    }
  }};
  padding-left: 10%;
  padding-top: 8%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10%;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8%;
`;

const FindBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 110px;
  margin: 5%;
  margin-top: 4%;
  margin-bottom: 6%;
  padding: 1.8%;
  padding-left: 6%;
  padding-right: 6%;
  font-weight: bold;
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

  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 10vh;
  }

  ${(props) =>
    props.active &&
    css`
      &:hover {
        transition: 0.1s;
        background-color: #f3ddd6;

        ${FindText} {
          color: gray;
        }
      }
    `}
`;

const FindText = styled.p`
  /* font-size: 1.6rem; */
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
  margin-left: 14%;
  font-weight: bold;
`;

const FindIcon = styled.img`
  width: 13%;
  height: 13%;
`;

const JustLookBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 4%;
  width: 35%;
  margin-right: 1.3%;

  ${(props) =>
    props.active &&
    css`
      &:hover {
        transition: 0.1s;
        background-color: #f3ddd6;

        ${JustLookText} {
          color: gray;
        }

        /* ${JustLookIcon} {
          content: url(/look_white.svg);
        } */
      }
    `}
`;

const JustLookText = styled.p`
  /* font-size: 1.6rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.4rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  font-weight: bold;
  margin-bottom: 10%;
`;

const JustLookIcon = styled.img`
  width: 50%;
  height: 50%;
  margin-left: 50%;
`;

const TestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 4%;
  padding-bottom: 1%;
  width: 35%;
  margin-left: 1.3%;

  ${(props) =>
    props.active &&
    css`
      &:hover {
        transition: 0.1s;
        background-color: #f3ddd6;

        ${TestText} {
          color: gray;
        }

        /* ${TestIcon} {
          content: url(/test_white.svg);
        } */
      }
    `}
`;

const TestText = styled.p`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.4rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  font-weight: bold;
  margin-bottom: 1.6%;
`;

const LevelText = styled.p`
  color: #df7857;
  font-weight: bold;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.25rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
`;

const TestIcon = styled.img`
  width: 50%;
  height: 50%;
  margin-left: 50%;
`;

const HelpBox = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 4%;
  padding-left: 6%;
  margin-left: 5.5%;
  margin-right: 5.5%;
  margin-top: 4%;
  margin-bottom: 4%;

  ${(props) =>
    props.active &&
    css`
      &:hover {
        transition: 0.1s;
        background-color: #f3ddd6;

        ${HelpText} {
          color: gray;
        }

        ${HelpIcon} {
          content: url(/help_white.svg);
        }
      }
    `}
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #df7857;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-right: 5%;
`;

const HelpIcon = styled.img`
  padding: 10%;
  width: 60%;
`;

const HelpText = styled.p`
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
  width: 67%;
`;

const FontBox = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 4%;
  padding-left: 6%;
  margin-left: 5.5%;
  margin-right: 5.5%;

  ${(props) =>
    props.active &&
    css`
      &:hover {
        transition: 0.1s;
        background-color: #f3ddd6;

        ${FontText} {
          color: gray;
        }

        ${FontIcon} {
          content: url(/font_white.svg);
        }
      }
    `}
`;

const FontIcon = styled.img`
  padding: 10%;
  width: 60%;
`;

const FontText = styled.p`
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
  width: 67%;
`;

const ImageUrls = ["/findicon.svg", "/questionIcon.svg"];

const HomeIconsAnimation = styled.img``;

const Home = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  const [findClick, setFindClick] = useState(false);
  const [recoClick, setRecoClick] = useState(false);
  const [helpClick, setHelpClick] = useState(false);
  const [testClick, setTestClick] = useState(false);
  const [fontClick, setFontClick] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [LevelImg, setLevelImg] = useState("");
  const navigate = useNavigate();
  document.body.style = "background: white;";
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const alertPC = () => {
    Swal.fire({
      title: "잠시만요!",
      html: "F12를 눌러 Toggle device toolbar를 통해 모바일 모드로 보시는 걸 권장합니다. <br/><br/>( 단축키 : F12 -> Ctrl+Shift+M )",
      icon: "warning",
      confirmButtonText: "확인",
      confirmButtonColor: "#798560",
    });
    localStorage.setItem("isAlerted", true);
  };

  const GoToFindPage = () => {
    setFindClick(true);
    setTimeout(() => {
      navigate(`/AppFind`);
    }, 100);
  };

  const GoToRecoPage = () => {
    setRecoClick(true);
    setTimeout(() => {
      navigate(`/Category`);
    }, 100);
  };

  const GoToHelpPage = () => {
    setHelpClick(true);
    setTimeout(() => {
      navigate(`/Method`);
    }, 100);
  };

  const GoToTestPage = () => {
    setTestClick(true);
    setTimeout(() => {
      navigate("/Test");
    }, 100);
  };

  const GoToFontPage = () => {
    setFontClick(true);
    setTimeout(() => {
      navigate(`/fontsizeSetting`);
    }, 100);
  };

  const ChangeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageUrls.length);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isDesktopOrLaptop && localStorage.getItem("isAlerted") == null) {
      alertPC();
    }
    const interval = setInterval(ChangeImage, 2800);
    return () => clearInterval(interval);
  }, []);

  const Level = window.localStorage.getItem("Level");
  useEffect(() => {
    setLevelImg(
      Level === "씨앗"
        ? "/Seed.svg"
        : Level === "새싹"
        ? "/Saessack.svg"
        : Level === "꽃"
        ? "/Flower.svg"
        : Level === "열매"
        ? "/Yeolmae.svg"
        : Level === "나무"
        ? "/Tree.svg"
        : null
    );
  }, [Level]);

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <BackGround>
            <HomeNavigator />
            <MainText fS={fontSize}>
              원하시는 서비스를
              <br />
              선택해주세요
            </MainText>

            <Box>
              {/* <FindBox onClick={GoToFindPage} active={findClick}>
            <HomeIconsAnimation />
            <FindText fS={fontSize}>
              필요한 어플 <br />
              찾아드릴게요
            </FindText>
          </FindBox> */}
              <FindBox onClick={GoToFindPage} active={findClick} fS={fontSize}>
                <HomeIconsAnimation
                  src={ImageUrls[currentImageIndex]}
                  style={{ width: "12%", marginRight: "10%" }}
                />
                필요한 어플을 <br />
                찾아드릴게요
              </FindBox>

              <Row1>
                <JustLookBox onClick={GoToRecoPage} active={recoClick}>
                  <JustLookText fS={fontSize}>
                    분야별
                    <br />
                    어플을
                    <br />
                    보여드릴게요
                  </JustLookText>
                  <JustLookIcon src="/lookicon.svg" />
                </JustLookBox>

                <TestBox onClick={GoToTestPage} active={testClick}>
                  <TestText fS={fontSize}>
                    테스트를
                    <br />
                    다시 하고
                    <br />
                    싶으신가요?
                  </TestText>
                  <LevelText fS={fontSize}>현재 : {Level}</LevelText>
                  <TestIcon src={LevelImg}></TestIcon>
                </TestBox>
              </Row1>

              <HelpBox onClick={GoToHelpPage} active={helpClick}>
                <Circle>
                  <HelpIcon src="/help_white.svg" />
                </Circle>
                <HelpText fS={fontSize}>
                  사용 방법을
                  <br />
                  알고 싶으신가요?
                </HelpText>
              </HelpBox>

              <FontBox onClick={GoToFontPage} active={fontClick}>
                <Circle>
                  <FontIcon src="/font_white.svg" />
                </Circle>
                <FontText fS={fontSize}>
                  글자 크기가
                  <br />
                  작으신가요?
                </FontText>
              </FontBox>
            </Box>
            <ContactUs />
          </BackGround>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <BackGround>
            <HomeNavigator />
            <MainText fS={fontSize}>
              원하시는 서비스를
              <br />
              선택해주세요
            </MainText>

            <Box>
              {/* <FindBox onClick={GoToFindPage} active={findClick}>
            <HomeIconsAnimation />
            <FindText fS={fontSize}>
              필요한 어플 <br />
              찾아드릴게요
            </FindText>
          </FindBox> */}
              <FindBox onClick={GoToFindPage} active={findClick} fS={fontSize}>
                <HomeIconsAnimation
                  src={ImageUrls[currentImageIndex]}
                  style={{ width: "12%", marginRight: "10%" }}
                />
                필요한 어플을 <br />
                찾아드릴게요
              </FindBox>

              <Row1>
                <JustLookBox onClick={GoToRecoPage} active={recoClick}>
                  <JustLookText fS={fontSize}>
                    분야별
                    <br />
                    어플을
                    <br />
                    보여드릴게요
                  </JustLookText>
                  <JustLookIcon src="/lookicon.svg" />
                </JustLookBox>

                <TestBox onClick={GoToTestPage} active={testClick}>
                  <TestText fS={fontSize}>
                    테스트를
                    <br />
                    다시 하고
                    <br />
                    싶으신가요?
                  </TestText>
                  <LevelText fS={fontSize}>현재 : {Level}</LevelText>
                  <TestIcon src={LevelImg}></TestIcon>
                </TestBox>
              </Row1>

              <HelpBox onClick={GoToHelpPage} active={helpClick}>
                <Circle>
                  <HelpIcon src="/help_white.svg" />
                </Circle>
                <HelpText fS={fontSize}>
                  사용 방법을
                  <br />
                  알고 싶으신가요?
                </HelpText>
              </HelpBox>

              <FontBox onClick={GoToFontPage} active={fontClick}>
                <Circle>
                  <FontIcon src="/font_white.svg" />
                </Circle>
                <FontText fS={fontSize}>
                  글자 크기가
                  <br />
                  작으신가요?
                </FontText>
              </FontBox>
            </Box>
            <ContactUs />
          </BackGround>
        </>
      )}
    </>
  );
};

export default Home;
