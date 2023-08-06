import React from 'react';
import styled, {css} from "styled-components";
import GrayNavigator from '../GrayNavigator';
import { useNavigate } from 'react-router';

const BackGround = styled.div`
    background-color: #F7F7F7;
    background-size: cover;
    width: 100vw;
    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 100vh;
    }
    margin: 0; 
`

const MidBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 17%;
    margin-bottom: 3%;
`

const ImgArea = styled.img`
    
`
const MainText = styled.p`
    margin-top: 5%;
    font-size: 1.6rem;
    text-align:center;
    font-weight:600;
`

const HighLight = styled.span`
    font-weight: 900;
    font-size: 1.7rem;
`

const SubText = styled.p`
    margin-top: 3%;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.47);

`

const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Row1 = styled.div`
    display: flex;
    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
    }
    
`

const Row2 = styled.div`
    display: flex;
    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
    }
`

const Box = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #FFFFFF;
   box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.07);
   border-radius: 10px;
   border: none;
   width: 46vw;
   margin: 3%;
   padding: 2%;

   &:hover{
    transition:2s;
    background-color: #EFC5B9;
   }


`

const SelText = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
`

const HealthCare = () => {
    const navigate = useNavigate();

    const GoToMenuPage = () => {
        setTimeout(()=>{
            navigate(`/AppsFindResult/식단`);
        },600);
    };
    
    const GoToSleepPage = () => {
        setTimeout(()=>{
            navigate(`/AppsFindResult/수면`);
        },600);
    };

    const GoToExercisePage = () => {
        setTimeout(()=>{
            navigate(`/AppsFindResult/운동`);
        },600);
    };

    return (
        <>
        <BackGround>
            <GrayNavigator/>
            <MidBox>
                <ImgArea src="/hi.svg"/>
                <MainText>어떤 <HighLight>관리</HighLight>가<br/>필요하신가요?</MainText>
                <SubText>아래의 버튼 중 하나를 선택해주세요.</SubText>
            </MidBox>
            <SelectBox>
                <Row1>
                    <Box onClick={GoToMenuPage}>
                        <SelText>식단</SelText>
                    </Box>
                    <Box onClick={GoToSleepPage}>
                        <SelText>수면</SelText>
                    </Box>
                </Row1>
                <Row2>
                    <Box onClick={GoToExercisePage}>
                        <SelText>운동</SelText>
                    </Box>
                </Row2>
            </SelectBox>
        </BackGround>
        </>
    );
};

export default HealthCare;