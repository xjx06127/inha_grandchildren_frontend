import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigator from "../Navigator";
import axios from "axios";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #617143;
  width: 100%;
`;

const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 50px 50px 0px 0px; /* 상단 모서리에만 border-radius를 적용 */
  background-color: #ffffff;
  padding-bottom: 10%;
  margin-top: 12%;
`;

const Img = styled.img`
  width: auto;
  height: auto;
`;
const Text = styled.p`
  font-weight: bold;
  font-size: 1.9rem;
`;

const Title = styled.p`
  font-size: 1.3rem;
  text-align: left;
`;

const Ibox = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 5%;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가로축 가운데 정렬 */
  align-items: center;
  margin-top: -15%;
`;

const Con = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start; /* 홀수 개수일 때 왼쪽 정렬 */
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  height: 150px;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 10%; /* 각 Box 요소의 아래 간격 설정 */
  /* &:nth-child(2n + 1) {
    margin-right: auto;
  } */
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
  margin-right: 5%;
  margin-bottom: 5%;
  font-size: 1.3rem;
  color: #617143;
  text-decoration: underline;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

const AppImage = styled.img`
  width: 60%;
  height: 60%;
`;

const Level5Reco = () => {
  const [App, setApp] = useState([]);
  useEffect(() => {
    axios.get(`https://forgrandparents.store/applist/`).then((res) => {
      setApp(res.data.level_5);
      console.log(App);
      console.log(res.data);
    });
  }, []);
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <>
      <Desktop>
        <Navigator />

        <Rectangle>
          <CBox>
            <Ibox>
              <Img src="/Level5.svg"></Img>
            </Ibox>
            <Text>나무용 어플</Text>
          </CBox>

          <Con>
            {App.map((element, index) => (
              <Box key={index}>
                <AppImage src={element.image} />
                <Title>{element.name}</Title>
                <Button
                  isActive={activeButtonIndex === 0}
                  onClick={() => handleButtonClick(0)}
                >
                  자세히
                </Button>
              </Box>
            ))}
          </Con>
        </Rectangle>
      </Desktop>
    </>
  );
};

export default Level5Reco;
