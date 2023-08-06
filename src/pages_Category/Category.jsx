import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TestNavigator from "../pages_Test/TestNavigator";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AppPage from "../pages_AppPage/AppPage";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #ffffff;
  width:100%;
  padding-bottom: 10%;
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
  margin-left: 7%;
  font-size: 1.6rem;
  color: #535353;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  /* 클릭 여부에 따라 폰트 두께를 동적으로 설정합니다. */
`;

const T1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-top: 10%;
`;


const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가로축 가운데 정렬 */
  margin-top: 5%;
  width:100%;
  align-items:center;
`;

const Box = styled.div`
  display: flex;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding:5%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  color: #617143;
  text-decoration: underline;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
  
  &:hover{
    font-weight: bold;
   }
`;

const Box1 = styled.div`
  display: flex;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top:10%;
  padding:5%;
`;

const Button1 = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  border: none;
  color: #617143;
  text-decoration: underline;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
 margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */

 &:hover{
    font-weight: bold;
   }
`;
const AppImage = styled.img`
  width: 30%;
  height: 30%;

`;
const Title = styled.p`
  font-size: 1.6rem;
  text-align: left;
  margin-left:5%;

`;

const TB = styled.div`
display: flex;
flex-direction:column;
width:65%;
`;

const Category = () => {
  const navigate = useNavigate();
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const handleButtonClick1 = (id) => {
    setTimeout(() => {
      navigate(`../AppPage/${id}`);
    }, 300);
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
            <Link to="../RecoApp">[더보기]</Link>
          </Tbutton>
        </T1>

        <Con>
          {recoApp[0] && (
            <Box>
              <AppImage src={recoApp[0].image}></AppImage>
              <TB>
              <Title>{recoApp[0].name}</Title>
              <Button
                onClick={() => {
                  handleButtonClick1(recoApp[0].id);
                }}
              >
                자세히
              </Button>
             </TB>
            </Box>
          )}
          {recoApp[1] && (
            <Box1>
              <AppImage src={recoApp[1].image}></AppImage>
              <TB>
              <Title>{recoApp[1].name}</Title>
              <Button1
                onClick={() => {
                  handleButtonClick1(recoApp[1].id);
                }}
              >
                자세히
              </Button1>
              </TB>
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
            <Link to="../level1">[더보기]</Link>
          </Tbutton>
        </T1>

        <Con>
          {app1[0] && (
            <Box>
              <AppImage src={app1[0].image}></AppImage>
              <TB>
              <Title>{app1[0].name}</Title>
              <Button
                onClick={() => {
                  handleButtonClick1(app1[0].id);
                }}
              >
                자세히
              </Button>
              </TB>
            </Box>
          )}
          {app1[1] && (
            <Box1>
              <AppImage src={app1[1].image}></AppImage>
              <TB>
              <Title>{app1[1].name}</Title>
              <Button1
                onClick={() => {
                  handleButtonClick1(app1[1].id);
                }}
              >
                자세히
              </Button1>
              </TB>
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
            <Link to="../level2">[더보기]</Link>
          </Tbutton>
        </T1>
        <Con>
          {app2[0] && (
            <Box>
              <AppImage src={app2[0].image}></AppImage>
              <TB>
              <Title>{app2[0].name}</Title>
              <Button
                onClick={() => {
                  handleButtonClick1(app2[0].id);
                }}
              >
                자세히
              </Button>
              </TB>
            </Box>
          )}
          {app2[1] && (
            <Box1>
              <AppImage src={app2[1].image}></AppImage>{" "}
              <TB>
              <Title>{app2[1].name}</Title>
              <Button1
                onClick={() => {
                  handleButtonClick1(app2[1].id);
                }}
              >
                자세히
              </Button1>
              </TB>
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
            <Link to="../level3">[더보기]</Link>
          </Tbutton>
        </T1>
        <Con>
          {app3[0] && (
            <Box>
              <AppImage src={app3[0].image}></AppImage>
              <TB>
              <Title>{app3[0].name}</Title>
              <Button
               
                onClick={() => {
                  handleButtonClick1(app3[0].id);
                }}
              >
                자세히
              </Button>
              </TB>
            </Box>
          )}
          {app3[1] && (
            <Box1>
              <AppImage src={app3[1].image}></AppImage>
              <TB>
              <Title>{app3[1].name}</Title>
              <Button1
                onClick={() => {
                  handleButtonClick1(app3[1].id);
                }}
              >
                자세히
              </Button1>
              </TB>
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
            <Link to="../level4">[더보기]</Link>
          </Tbutton>
        </T1>
        <Con>
          {" "}
          {app4[0] && (
            <Box>
              <AppImage src={app4[0].image}></AppImage>
              <TB>
              <Title>{app4[0].name}</Title>
              <Button
                onClick={() => {
                  handleButtonClick1(app4[0].id);
                }}
              >
                자세히
              </Button>
              </TB>
            </Box>
          )}
          {app4[1] && (
            <Box1>
              <AppImage src={app4[1].image}></AppImage>
              <TB>
              <Title>{app4[1].name}</Title>
              <Button1
                onClick={() => {
                  handleButtonClick1(app4[1].id);
                }}
              >
                자세히
              </Button1>
              </TB>
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
            <Link to="../level5">[더보기]</Link>
          </Tbutton>
        </T1>
        <Con>
          {" "}
          {app5[0] && (
            <Box>
              <AppImage src={app5[0].image}></AppImage>
              <TB>
              <Title>{app5[0].name}</Title>
              <Button
                onClick={() => {
                  handleButtonClick1(app5[0].id);
                }}
              >
                자세히
              </Button>
              </TB>
            </Box>
          )}
          {app5[1] && (
            <Box1>
              <AppImage src={app5[1].image}></AppImage>
              <TB>
              <Title>{app5[1].name}</Title>
              <Button1
                onClick={() => {
                  handleButtonClick1(app5[1].id);
                }}
              >
                자세히
              </Button1>
              </TB>
            </Box1>
          )}
        </Con>
      </Desktop>
    </>
  );
};

export default Category;
