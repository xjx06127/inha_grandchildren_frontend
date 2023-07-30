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

const Text = styled.p`
  font-weight: bold;
  font-size: 1.9rem;
`;

const Highlight = styled.span`
   background: linear-gradient(180deg,rgba(255, 255, 255, 0) 50%, #FFD05D 50%
  );
`;


const Tbutton = styled.button`
 background-color:transparent;
 border: none;
 margin-left:15px;
 font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
/* 클릭 여부에 따라 폰트 두께를 동적으로 설정합니다. */
`;
    

const TButtontext=styled.p`
 font-size:1.3rem;
 color: #535353;
    
`;


const T1= styled.div`
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

const Box= styled.div`
display: flex;
flex-direction: column;
width:150px;
height:150px;
background-color: #ffffff;
box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
border-radius: 5px;

`;

const Button= styled.button`
background-color:transparent;
border: none;
margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
margin-right: 10px; 
margin-bottom: 10px;
font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

const Buttontext=styled.p`
    font-size: 1.3rem;
    color: #617143;
    text-decoration: underline;
`;

const Box1= styled.div`
display: flex;
flex-direction: column;
width:150px;
height:150px;
background-color: #ffffff;
margin-left:25px;
box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`;

const Button1= styled.button`
font-size: 20px;
background-color:transparent;
border: none;
color: #617143;
margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
text-decoration: underline;
margin-right: 10px; 
margin-bottom: 10px;
font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;




const Category = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

    const handleButtonClick = (index) => {
      setActiveButtonIndex(index);
    };

    return (
        <>
         <TestNavigator/>
        <Desktop>
       

        <T1>
        <Text><Highlight>추천</Highlight> 어플 </Text>
        <Tbutton  isActive={activeButtonIndex === 0} onClick={() => handleButtonClick(0)}>
            <TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>

            <Con>
            <Box><Button isActive={activeButtonIndex === 7} onClick={() => handleButtonClick(7)}>
                <Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1 isActive={activeButtonIndex === 8} onClick={() => handleButtonClick(8)}>
                <Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>씨앗용</Highlight> 어플</Text>
        <Tbutton  isActive={activeButtonIndex === 1} onClick={() => handleButtonClick(1)}>
            <TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>

            <Con>
            <Box><Button isActive={activeButtonIndex === 9} onClick={() => handleButtonClick(9)}>
                <Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1 isActive={activeButtonIndex === 10} onClick={() => handleButtonClick(10)}>
                <Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>새싹용</Highlight> 어플</Text>
        <Tbutton  isActive={activeButtonIndex === 2} onClick={() => handleButtonClick(2)}>
            <TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button isActive={activeButtonIndex === 11} onClick={() => handleButtonClick(11)}>
                <Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1 isActive={activeButtonIndex === 12} onClick={() => handleButtonClick(12)}>
                <Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>꽃용</Highlight> 어플</Text>
        <Tbutton  isActive={activeButtonIndex === 3} onClick={() => handleButtonClick(3)}>
            <TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button isActive={activeButtonIndex === 13} onClick={() => handleButtonClick(13)}>
                <Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1 isActive={activeButtonIndex === 14} onClick={() => handleButtonClick(14)}>
                <Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>열매용</Highlight> 어플</Text>
        <Tbutton  isActive={activeButtonIndex === 4} onClick={() => handleButtonClick(4)}>
            <TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button isActive={activeButtonIndex === 15} onClick={() => handleButtonClick(15)}>
                <Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1 isActive={activeButtonIndex === 16} onClick={() => handleButtonClick(16)}>
                <Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>나무용</Highlight> 어플</Text>
        <Tbutton  isActive={activeButtonIndex === 5} onClick={() => handleButtonClick(5)}>
            <TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button isActive={activeButtonIndex === 17} onClick={() => handleButtonClick(17)}>
                <Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1 isActive={activeButtonIndex === 18} onClick={() => handleButtonClick(18)}>
                <Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        </Desktop>
        </>
    );
};

export default Category;