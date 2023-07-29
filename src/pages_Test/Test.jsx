import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/lazy';




const All=styled.div`
      padding-top: 15%;
margin-bottom: 5%;
`
;
const Question = styled.div`
  color: #000000;
  margin-left: 10%;
font-size: 4vh;
display: flex;
flex-direction: row;
text-align:left;
`;
const Highlight = styled.div`
  color:  #DF7857;
font-weight: bolder;
font-size: 4vh;
height: 0%;
`;


const Ans = styled.button`
  color: #000000;
  width: 80%;
  height: 30vh;
  &:hover {
    background-color:  #DF7857;
    transition: 1.5s;
    color:white;
  }
  background-color:white;
  border: none;
  font-size:30px;
  /* font-weight: bold; */
  margin-top: 10%;
  cursor: pointer;
/* 예시 문구 */
margin-left: 10%;
box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
border-radius: 5px;
font-size: 3vh;
`;

const Icon = styled.img`
  width: 30%;
  height: 40%;

`;

const Align=styled.div`
display: flex;
font-size: 3vh;
`;

const PageNum=styled.div`
    color:  #DF7857;
    font-size: 3vh;
    margin-left: 10%;

`;

const NextButton = styled.button`
width: 60%;
height: 8vh;
margin-left: 20%;
background: linear-gradient(97.27deg, #DF7857 0%, #E7AB9A 100%);
border-radius: 5px;
color: white;
font-size: 3vh;
margin-top: 10%;
margin-bottom: 10%;
font-weight: bold;
`;
const Test = () => {
    return (
        <div>
       
            <All>
            <PageNum>1/5</PageNum>
           <Question><Highlight>회원가입</Highlight>을</Question> <Question> 성공해 보셨나요?</Question>
           </All>
<Align><Ans><Icon src="/Yes.png"></Icon>네</Ans></Align>
<Align><Ans><Icon src="/No.png"></Icon>아니요</Ans></Align>

<NextButton>다음</NextButton>


        </div>
    );
};

export default Test;