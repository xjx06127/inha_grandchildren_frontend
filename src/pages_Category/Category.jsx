import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AppPage from "../pages_AppPage/AppPage";
import CategoryNavigator from "./CategoryNavigator";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import Fade from 'react-reveal/Fade';

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #ffffff;
  width: 100%;
  padding-bottom:10%;
  font-family: 'MICE';
`;

const Text = styled.p`
  /* font-size: 1.9rem; */
  font-weight:bold;
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
`;

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #ffd05d 50%);
`;

const Tbutton = styled.button`
  background-color: transparent;
  border: none;
  /* font-size: 1.3rem; */
  color: #535353;
  margin-right:14%;
  font-family: 'MICE';
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.7rem";
    }
  }};

  &:hover {
    font-weight: bold;
  }
`;

const T1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: baseline;
  justify-content:space-between;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5%;
`;
const Name = styled.p`
  /* font-size: 1.3rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};
`;

const Number = styled.p`
  /* font-size: 1.3rem; */
  font-weight: bold;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};
`;

const Icon1 = styled.img`
  width: 6%;
  height: 6%;
  margin-right: 2%;
`;

const Box = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 7%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5%;
  /* justify-content: center; 
  align-items:center; */
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  /* font-size: 1.3rem; */
  color: #617143;
  text-decoration: underline;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
  font-family: 'MICE';
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};

  &:hover {
    font-weight: bold;
  }
`;

const Box1 = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom:15%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5%;
`;

const Button1 = styled.button`
  /* font-size: 1.3rem; */
  background-color: transparent;
  border: none;
  color: #617143;
  text-decoration: underline;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
    font-family: 'MICE';
    font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};

  &:hover {
    font-weight: bold;
  }
`;
const AppImage = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 5px;
`;
const Title = styled.p`
  /* font-size: 1.6rem; */
  text-align: left;
  margin-left: 5%;
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

const TB = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const BigBox = styled.div`
  
`

const BigBoxTwo = styled.div`
  
`

const Category = () => {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext); 

  const handleButtonClick2 = () => {
    setTimeout(() => {
      navigate(`../RecoApp`);
    }, 100); 
  };

  const handleButtonClick3 = () => {
    setTimeout(() => {
      navigate("../level1");
    }, 100); 
  };

  const handleButtonClick4 = () => {
    setTimeout(() => {
      navigate("../level2");
    }, 100); 
  };

  const handleButtonClick5 = () => {
    setTimeout(() => {
      navigate("../level3");
    }, 100); 
  };

  const handleButtonClick6 = () => {
    setTimeout(() => {
      navigate("../level4");
    }, 100); 
  };

  const handleButtonClick7 = () => {
    setTimeout(() => {
      navigate("../level5");
    }, 100); 
  };

  const handleButtonClick1 = (id) => {
    setTimeout(() => {
      navigate(`../AppPage/${id}`);
    }, 100);
  };

  const [recoApp, setRecoApp] = useState([]);
  const [app1, setApp1] = useState([]);
  const [app2, setApp2] = useState([]);
  const [app3, setApp3] = useState([]);
  const [app4, setApp4] = useState([]);
  const [app5, setApp5] = useState([]);
  const [AppName, setAppName] = useState("");

  useEffect(() => {
    axios.get(`https://forgrandparents.store/mainapplist/`).then((res) => {
      //   setRecoApp(res.data.level_0);
      console.log(res);
      setRecoApp(res.data.top_app);
      setApp1(res.data.level_0);
      setApp2(res.data.level_1);
      setApp3(res.data.level_2);
      setApp4(res.data.level_3_4);
      setApp5(res.data.level_5);
    });
  }, []);

  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CategoryNavigator />
      <Desktop>

      <BigBox>
        <T1>
          <Text fS={fontSize}>
            <Highlight>손주</Highlight>의 추천{" "}
          </Text>
          <Tbutton 
            onClick= {handleButtonClick2} fS={fontSize}
          > [더보기]
          </Tbutton>
        </T1>
      </BigBox>
      
      <BigBox>
        {recoApp[0] && (
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{recoApp[0].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box>
              <AppImage src={recoApp[0].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{recoApp[0].name}</Title>
                <Button
                  onClick={() => {
                    handleButtonClick1(recoApp[0].id); 
                  }} fS={fontSize}
                >
                  자세히
                </Button>
              </TB>
            </Box>
          </div>
        )}
        </BigBox>
      

        <BigBox>
        {recoApp[1] && (
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{recoApp[1].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box1>
              <AppImage src={recoApp[1].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{recoApp[1].name}</Title>
                <Button1
                  onClick={() => {
                    handleButtonClick1(recoApp[1].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button1>
              </TB>
            </Box1>
          </div>
        )}
        </BigBox>

        <Fade bottom delay={0}>
        <div>
        <T1>
          <Text fS={fontSize}>
            <Highlight>씨앗용</Highlight> 어플
          </Text>
          <Tbutton
          onClick= {handleButtonClick3} fS={fontSize}
          >[더보기]
          </Tbutton>
        </T1>
        </div>
        </Fade>
        
        {app1[0] && (
           <Fade bottom delay={300}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app1[0].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box>
              <AppImage src={app1[0].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app1[0].name}</Title>
                <Button
                  onClick={() => {
                    handleButtonClick1(app1[0].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button>
              </TB>
            </Box>
          </div>
          </Fade>
        )}

        {app1[1] && (
          <Fade bottom delay={400}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app1[1].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box1>
              <AppImage src={app1[1].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app1[1].name}</Title>
                <Button1
                  onClick={() => {
                    handleButtonClick1(app1[1].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button1>
              </TB>
            </Box1>
          </div>
          </Fade>
        )}
        

        <Fade bottom>
        <T1>
          <Text fS={fontSize}>
            <Highlight>새싹용</Highlight> 어플
          </Text>

          <Tbutton
           onClick= {handleButtonClick4} fS={fontSize}
          >[더보기]
          </Tbutton>
        </T1>
        </Fade>

        {app2[0] && (
          <Fade bottom delay={300}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app2[0].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box>
              <AppImage src={app2[0].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app2[0].name}</Title>
                <Button
                  onClick={() => {
                    handleButtonClick1(app2[0].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button>
              </TB>
            </Box>
          </div>
          </Fade>
        )}

        {app2[1] && (
          <Fade bottom delay={400}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app2[1].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box1>
              <AppImage src={app2[1].image}></AppImage>{" "}
              <TB>
                <Title fS={fontSize}>{app2[1].name}</Title>
                <Button1
                  onClick={() => {
                    handleButtonClick1(app2[1].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button1>
              </TB>
            </Box1>
          </div>
          </Fade>
        )}
      

        <T1>
          <Text fS={fontSize}>
            <Highlight>꽃용</Highlight> 어플
          </Text>
          <Tbutton
            onClick= {handleButtonClick5} fS={fontSize}
          >[더보기]
          </Tbutton>
        </T1>

        
        {app3[0] && (
          <Fade bottom delay={300}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app3[0].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box>
              <AppImage src={app3[0].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app3[0].name}</Title>
                <Button
                  onClick={() => {
                    handleButtonClick1(app3[0].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button>
              </TB>
            </Box>
          </div>
          </Fade>
        )}
  
        {app3[1] && (
          <Fade bottom delay={400}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app3[1].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box1>
              <AppImage src={app3[1].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app3[1].name}</Title>
                <Button1
                  onClick={() => {
                    handleButtonClick1(app3[1].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button1>
              </TB>
            </Box1>
          </div>
          </Fade>
        )}


        <T1>
          <Text fS={fontSize}>
            <Highlight>열매용</Highlight> 어플
          </Text>
          <Tbutton
              onClick= {handleButtonClick6} fS={fontSize}
          >[더보기]
          </Tbutton>
        </T1>
      
        {app4[0] && (
          <Fade bottom delay={300}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app4[0].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box>
              <AppImage src={app4[0].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app4[0].name}</Title>
                <Button
                  onClick={() => {
                    handleButtonClick1(app4[0].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button>
              </TB>
            </Box>
          </div>
          </Fade>
        )}

        {app4[1] && (
          <Fade bottom delay={400}>         
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app4[1].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box1>
              <AppImage src={app4[1].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app4[1].name}</Title>
                <Button1
                  onClick={() => {
                    handleButtonClick1(app4[1].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button1>
              </TB>
            </Box1>
          </div>
          </Fade> 
        )}


        <T1>
          <Text fS={fontSize}>
            <Highlight>나무용</Highlight> 어플
          </Text>
          <Tbutton
             onClick= {handleButtonClick7} fS={fontSize}
          >[더보기]
          </Tbutton>
        </T1>
        

        {app5[0] && (
          <Fade bottom delay={300}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app5[0].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box>
              <AppImage src={app5[0].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app5[0].name}</Title>
                <Button
                  onClick={() => {
                    handleButtonClick1(app5[0].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button>
              </TB>
            </Box>
          </div>
          </Fade>
        )}

        {app5[1] && (
          <Fade bottom delay={400}>
          <div>
            <NameWrapper>
              <Icon1 src="/Rec.svg"></Icon1>
              <Number fS={fontSize}>{app5[1].like}명</Number>
              <Name fS={fontSize}>이 추천해요!</Name>
            </NameWrapper>
            <Box1>
              <AppImage src={app5[1].image}></AppImage>
              <TB>
                <Title fS={fontSize}>{app5[1].name}</Title>
                <Button1
                  onClick={() => {
                    handleButtonClick1(app5[1].id);
                  }} fS={fontSize}
                >
                  자세히
                </Button1>
              </TB>
            </Box1>
          </div>
          </Fade>
        )}
      </Desktop>
    </>
  );
};

export default Category;
