import React from 'react';
import styled from 'styled-components';



const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #617143;
  height:250px;
  width:100%;
`;

const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width:100%;
  border-radius: 50px ; /* 상단 모서리에만 border-radius를 적용 */
  margin-top: -100px;
  background-color: #ffffff;
  padding-bottom: 100px;
`;

const Img =styled.img`
width:auto;
height:auto;
  
`

const Ibox = styled.div`
width:100px;
height:100px;
margin-top:-50px;
background-color: #ffffff;
border-radius: 15px;
box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;
`; 

const Con = styled.div`
display: flex;
flex-direction: row;
justify-content: center; /* 가로축 가운데 정렬 */
margin-top: 30px;
border-radius: 10px;
`;

const Box= styled.div`
display: flex;
flex-direction: column;
width:150px;
height:150px;
background-color: #ffffff;
box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`;

const Button= styled.button`
background-color:transparent;
border: none;
margin-top: auto; /* 오른쪽 하단으로 버튼 이동 */
margin-left: auto; /* 오른쪽 하단으로 버튼 이동 */
margin-right: 10px; 
margin-bottom: 10px; 
`;

const Buttontext=styled.p`
    font-size: 20px;
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
box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
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
`;


const AppReco = () => {
  return (
    <>
    <Desktop>
    </Desktop>
    <Rectangle>
      <Ibox><Img src="/Rec.svg"></Img></Ibox>
      <Con>
      <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
      <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
      </Con>

      <Con>
      <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
      <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
      </Con>

      <Con>
      <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
      <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
      </Con>
      </Rectangle>

   
   </>
  );
};

export default AppReco;