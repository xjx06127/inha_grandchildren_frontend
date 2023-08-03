import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TestNavigator from "../pages_Test/TestNavigator";
import axios from "axios";
import { Link } from "react-router-dom";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #ffffff;
  padding-bottom: 100px;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.9rem;
`;

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffd05d 50%);
`;

const Tbutton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 15px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  /* 클릭 여부에 따라 폰트 두께를 동적으로 설정합니다. */
`;

const TButtontext = styled.p`
  font-size: 1.3rem;
  color: #535353;
`;

const T1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 50px;
`;

const Con = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로축 가운데 정렬 */
  margin-top: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-right: 10px;
  margin-bottom: 10px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

const Buttontext = styled.p`
  font-size: 1.3rem;
  color: #617143;
  text-decoration: underline;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  margin-left: 25px;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Button1 = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: #617143;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
  text-decoration: underline;
  margin-right: 10px;
  margin-bottom: 10px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;
const AppImage = styled.img`
  width: 60%;
  height: 60%;
`;
const Title = styled.p`
  font-size: 1.3rem;
  text-align: left;
`;
const Category = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const [recoApp, setRecoApp] = useState([]);
  const [app1, setApp1] = useState([]);
  const [app2, setApp2] = useState([]);
  const [app3, setApp3] = useState([]);
  const [app4, setApp4] = useState([]);
  const [app5, setApp5] = useState([]);
  useEffect(() => {
    axios.get(`https://forgrandparents.store/mainapplist/`).then((res) => {
      //   setRecoApp(res.data.level_0);
      console.log(res.data);
      setRecoApp(res.data.top_app);
      setApp1(res.data.level_0);
      setApp2(res.data.level_1);
      setApp3(res.data.level_2);
      setApp4(res.data.level_3_4);
      setApp5(res.data.level_5);
    });
  }, []);

  return (
    <>
      <TestNavigator />
      <Desktop>
        <T1>
          <Text>
            <Highlight>추천</Highlight> 어플{" "}
          </Text>
          <Tbutton
            isActive={activeButtonIndex === 0}
            onClick={() => handleButtonClick(0)}
          >
            <TButtontext>[더보기]</TButtontext>
          </Tbutton>
        </T1>

        <Con>
          {recoApp[0] && (
            <Box>
              <AppImage src={recoApp[0].image}></AppImage>
              <Title>{recoApp[0].name}</Title>
              <Button
                isActive={activeButtonIndex === 7}
                onClick={() => handleButtonClick(7)}
              >
                <Buttontext>자세히</Buttontext>
              </Button>
            </Box>
          )}
          {recoApp[1] && (
            <Box1>
              <AppImage src={recoApp[1].image}></AppImage>
              <Title>{recoApp[1].name}</Title>
              <Button1
                isActive={activeButtonIndex === 8}
                onClick={() => handleButtonClick(8)}
              >
                <Buttontext>자세히</Buttontext>
              </Button1>
            </Box1>
          )}
        </Con>

        <T1>
          <Text>
            <Highlight>씨앗용</Highlight> 어플
          </Text>
          <Tbutton
            isActive={activeButtonIndex === 1}
            onClick={() => handleButtonClick(1)}
          >
            <Link to="../level1">
              <TButtontext>[더보기]</TButtontext>
            </Link>
          </Tbutton>
        </T1>

        <Con>
          {app1[0] && (
            <Box>
              <AppImage src={app1[0].image}></AppImage>
              <Title>{app1[0].name}</Title>
              <Button
                isActive={activeButtonIndex === 9}
                onClick={() => handleButtonClick(9)}
              >
                <Buttontext>자세히</Buttontext>
              </Button>
            </Box>
          )}
          {app1[1] && (
            <Box1>
              <AppImage src={app1[1].image}></AppImage>
              <Title>{app1[1].name}</Title>
              <Button1
                isActive={activeButtonIndex === 10}
                onClick={() => handleButtonClick(10)}
              >
                <Buttontext>자세히</Buttontext>
              </Button1>
            </Box1>
          )}
        </Con>

        <T1>
          <Text>
            <Highlight>새싹용</Highlight> 어플
          </Text>

          <Tbutton
            isActive={activeButtonIndex === 2}
            onClick={() => handleButtonClick(2)}
          >
            <Link to="../level2">
              <TButtontext>[더보기]</TButtontext>
            </Link>
          </Tbutton>
        </T1>
        <Con>
          {app2[0] && (
            <Box>
              <AppImage src={app2[0].image}></AppImage>
              <Title>{app2[0].name}</Title>
              <Button
                isActive={activeButtonIndex === 11}
                onClick={() => handleButtonClick(11)}
              >
                <Buttontext>자세히</Buttontext>
              </Button>
            </Box>
          )}
          {app2[1] && (
            <Box1>
              <AppImage src={app2[1].image}></AppImage>{" "}
              <Title>{app2[1].name}</Title>
              <Button1
                isActive={activeButtonIndex === 12}
                onClick={() => handleButtonClick(12)}
              >
                <Buttontext>자세히</Buttontext>
              </Button1>
            </Box1>
          )}
        </Con>

        <T1>
          <Text>
            <Highlight>꽃용</Highlight> 어플
          </Text>
          <Tbutton
            isActive={activeButtonIndex === 3}
            onClick={() => handleButtonClick(3)}
          >
            <Link to="../level3">
              <TButtontext>[더보기]</TButtontext>
            </Link>
          </Tbutton>
        </T1>
        <Con>
          {app3[0] && (
            <Box>
              <AppImage src={app3[0].image}></AppImage>
              <Title>{app3[0].name}</Title>
              <Button
                isActive={activeButtonIndex === 13}
                onClick={() => handleButtonClick(13)}
              >
                <Buttontext>자세히</Buttontext>
              </Button>
            </Box>
          )}
          {app3[1] && (
            <Box1>
              <AppImage src={app3[1].image}></AppImage>
              <Title>{app3[1].name}</Title>
              <Button1
                isActive={activeButtonIndex === 14}
                onClick={() => handleButtonClick(14)}
              >
                <Buttontext>자세히</Buttontext>
              </Button1>
            </Box1>
          )}
        </Con>

        <T1>
          <Text>
            <Highlight>열매용</Highlight> 어플
          </Text>
          <Tbutton
            isActive={activeButtonIndex === 4}
            onClick={() => handleButtonClick(4)}
          >
            {" "}
            <Link to="../level4">
              <TButtontext>[더보기]</TButtontext>{" "}
            </Link>
          </Tbutton>
        </T1>
        <Con>
          {" "}
          {app4[0] && (
            <Box>
              <AppImage src={app4[0].image}></AppImage>
              <Title>{app4[0].name}</Title>
              <Button
                isActive={activeButtonIndex === 15}
                onClick={() => handleButtonClick(15)}
              >
                <Buttontext>자세히</Buttontext>
              </Button>
            </Box>
          )}
          {app4[1] && (
            <Box1>
              <AppImage src={app4[1].image}></AppImage>
              <Title>{app4[1].name}</Title>
              <Button1
                isActive={activeButtonIndex === 16}
                onClick={() => handleButtonClick(16)}
              >
                <Buttontext>자세히</Buttontext>
              </Button1>
            </Box1>
          )}
        </Con>

        <T1>
          <Text>
            <Highlight>나무용</Highlight> 어플
          </Text>
          <Tbutton
            isActive={activeButtonIndex === 5}
            onClick={() => handleButtonClick(5)}
          >
            {" "}
            <Link to="../level5">
              <TButtontext>[더보기]</TButtontext>{" "}
            </Link>
          </Tbutton>
        </T1>
        <Con>
          {" "}
          {app5[0] && (
            <Box>
              <AppImage src={app5[0].image}></AppImage>
              <Title>{app5[0].name}</Title>
              <Button
                isActive={activeButtonIndex === 17}
                onClick={() => handleButtonClick(17)}
              >
                <Buttontext>자세히</Buttontext>
              </Button>
            </Box>
          )}
          {app5[1] && (
            <Box1>
              <AppImage src={app5[1].image}></AppImage>
              <Title>{app5[1].name}</Title>
              <Button1
                isActive={activeButtonIndex === 18}
                onClick={() => handleButtonClick(18)}
              >
                <Buttontext>자세히</Buttontext>
              </Button1>
            </Box1>
          )}
        </Con>
      </Desktop>
    </>
  );
};

export default Category;
