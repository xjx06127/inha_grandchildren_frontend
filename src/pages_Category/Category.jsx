import React from 'react';
import styled from 'styled-components';

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  background-color: #FFFFFF;
  padding-top:20px;
  padding-bottom: 100px;

`;



const Text = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const Highlight = styled.span`
   background: linear-gradient(180deg,rgba(255, 255, 255, 0) 50%, #FFD05D 50%
  );
`;



const Tbutton = styled.button`
 background-color:transparent;
 border: none;
 margin-left:15px;
 
`;
    

const TButtontext=styled.p`
 font-size:20px;
 color: #535353;
    
`;


const T1= styled.div`
display: flex;
flex-direction: row;
margin-left: 20px;
margin-top: 70px;
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






const Category = () => {
    return (
        <>
        <Desktop>
       

        <T1>
        <Text><Highlight>추천</Highlight> 어플 </Text>
        <Tbutton ><TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>

            <Con>
            <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>씨앗용</Highlight> 어플</Text>
        <Tbutton ><TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>

            <Con>
            <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>새싹용</Highlight> 어플</Text>
        <Tbutton ><TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>꽃용</Highlight> 어플</Text>
        <Tbutton ><TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>열매용</Highlight> 어플</Text>
        <Tbutton ><TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button>=<Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        <T1>
        <Text><Highlight>나무용</Highlight> 어플</Text>
        <Tbutton ><TButtontext>[더보기]</TButtontext></Tbutton>
        </T1>
            <Con>
            <Box><Button><Buttontext>자세히</Buttontext></Button></Box>
            <Box1><Button1><Buttontext>자세히</Buttontext></Button1></Box1>
            </Con>

        </Desktop>
        </>
    );
};

export default Category;