import React, {useState} from 'react';
import styled from 'styled-components';
import TestNavigator from '../pages_Test/TestNavigator';

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #FFFFFF;
  padding-bottom: 100px;
  
`;

const AppNameWrapper = styled.div`
  text-align: center;
`;

const AppName = styled.p`
  font-weight: bold;
  font-size: 1.9rem;
  
`;
const Con= styled.div`
display: flex;
flex-direction: row;
justify-content: center; /* 가로축 가운데 정렬 */
align-items:center;
margin-top: 30px;

`;


const Circle = styled.div`
  width: 58px;
  height: 58px;
  background-color: #617143;
  border-radius: 50%; /* 50%로 설정하여 원 모양 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img =styled.img`
width:auto;
height:auto;
`
const Level=styled.p`
font-size: 1.6rem;
margin-left:15px;
`;


const Box= styled.div`
display: flex;
flex-direction: column;
width:297px;
height:352px;
background-color: #ffffff;
box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`;

const Button= styled.button`
background-color:transparent;
border: none;
width:129;
height:39;
margin-top:10px;
margin-bottom: 10px;
font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

const Box1= styled.div`
display: flex;
flex-direction: column;
width:297px;
height:229px;
background-color: #ffffff;
box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`;



const AppPage = () => {
    return (
      <>
      <Desktop>
        <AppNameWrapper><AppName>피그마</AppName></AppNameWrapper>
      </Desktop>
      <Con>
      <Circle><Img/></Circle>
      <Level>이러쿵저러sgfdsdgsd쿵<br/>이러쿵 저러쿵쿵쿵</Level>
      </Con>
      </>
    );
};

export default AppPage;