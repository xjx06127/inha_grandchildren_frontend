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
    margin-top: 20%;
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

const Row3 = styled.div`
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

const LivingAppTest = () => {
    const navigate = useNavigate();

    const GoToFinancePage = () => {
        setTimeout(()=>{
            navigate(`/FinanceAppsFind`)
        },600);
    };

    const GoToWeatherPage = () => {
        setTimeout(()=>{
            navigate(`/AppsFindResult/날씨`)
        },600);
    };

    
    const GoToSearchLoadPage = () => {
        setTimeout(()=>{
            navigate(`/SearchLoadsAppsFind`)
        },600);
    };

    const GoToDeliveryPage = () => {
        setTimeout(()=>{
            navigate(`/DeliveryAppsFind`)
        },600);
    };

    const GoToSchedulePage = () => {
        setTimeout(()=>{
            navigate(`/AppsFindResult/일정 관리`)
        },600);
    };

    return (
        <>
        <BackGround>
            <GrayNavigator/>
            <MidBox>
                <ImgArea src="/hi.svg"/>
                <MainText>지금 <HighLight>필요하신 것</HighLight>이<br/>무엇인가요?</MainText>
                <SubText>아래의 버튼 중 하나를 선택해주세요.</SubText>
            </MidBox>
            <SelectBox>
                <Row1>
                    <Box onClick={GoToFinancePage}>
                        <SelText>금융</SelText>
                    </Box>
                    <Box onClick={GoToWeatherPage}>
                        <SelText>날씨</SelText>
                    </Box>
                </Row1>
                
                <Row2>
                    <Box onClick={GoToSearchLoadPage}>
                        <SelText>길 찾기</SelText>
                    </Box>
                    <Box onClick={GoToDeliveryPage}>
                        <SelText>배달 및<br/> 배송</SelText>
                    </Box>
                </Row2>

                <Row3>
                    <Box onClick={GoToSchedulePage}>
                        <SelText>일정 관리</SelText>
                    </Box>
                </Row3>
            </SelectBox>
        </BackGround>
        </>
    );
};

export default LivingAppTest;