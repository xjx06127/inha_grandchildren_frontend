import React from 'react';
import styled, {css} from "styled-components";
import HomeNavigator from './HomeNavigator';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
  @media (orientation: portrait) {
    height: 40vh;
  }
  @media (orientation: landscape) {
    height: 120vh;
  }
`;

const MainText = styled.h1`
color : white;
font-size: 1.9rem;
padding-left: 10%;
padding-top: 6%;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10%;

`

const Row1 = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8%;
`


const FindBox = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 110px;
    margin: 5%;
    margin-top: 4%;
    margin-bottom: 4%;
    padding: 1.8%;
    padding-left: 6%;
    padding-right: 6%;

    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 10vh;
    }

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.5s;
        background-color: #F3DDD6;

        ${FindText} {
          color: white;
        }
      }
    `
    }

`

const FindText = styled.p`
    font-size : 1.6rem;
    margin-left: 5%;
    font-weight: bold;
`

const FindIcon = styled.img`
    width: 13%;
    height: 13%;
`

const JustLookBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 4%;
    width: 35%;
    margin-right: 1.3%;

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.5s;
        background-color: #F3DDD6;

        ${JustLookText} {
            color: white;
        }
        
        ${JustLookIcon}{
            content: url(/look_white.svg);
        }
      }
    `
    }
`

const JustLookText = styled.p`
    font-size : 1.6rem;
    font-weight: bold;
    margin-bottom: 10%;
    `

const JustLookIcon = styled.img`
    width: 50%;
    height: 50%;
    margin-left: 50%;
    
`

const TestBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 4%;
    padding-bottom: 1%;
    width: 35%;
    margin-left: 1.3%;

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.5s;
        background-color: #F3DDD6;

        ${TestText} {
          color: white;
        }
        
        ${TestIcon}{
            content: url(/test_white.svg);
        }
      }
    `
    }

`

const TestText = styled.p`
    font-size : 1.6rem;
    font-weight: bold;
    margin-bottom: 10%;
`

const TestIcon = styled.img`
    width: 50%;
    height: 50%;
    margin-left: 50%;

`

const HelpBox = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 4%;
    padding-left: 6%;
    margin-left: 5.5%;
    margin-right: 5.5%;
    margin-top: 4%;
    margin-bottom: 4%;

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.5s;
        background-color: #F3DDD6;

        ${HelpText} {
          color: white;
        }
        
        ${HelpIcon}{
            content: url(/help_white.svg);
        }
      }
    `
    }

`

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DF7857;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-right: 5%;
    
`

const HelpIcon = styled.img`
    padding: 10%;
    width: 60%;
`

const HelpText = styled.p`
    font-size : 1.6rem;
    font-weight: bold;

`

const FontBox = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 4%;
    padding-left: 6%;
    margin-left: 5.5%;
    margin-right: 5.5%;

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.5s;
        background-color: #F3DDD6;

        ${FontText} {
          color: white;
        }
        
        ${FontIcon}{
            content: url(/font_white.svg);
        }
      }
    `
    }
`

const FontIcon = styled.img`
    padding: 10%;
    width: 60%;
`

const FontText = styled.p`
    font-size : 1.6rem;
    font-weight: bold;
`

const ImageUrls = [
    '/findicon.svg',
    '/questionIcon.svg'
];

const WhiteImageUrls = [
    '/findicon.svg',
    '/questionIcon.svg'
];

const Home = () => {
    const [findClick, setFindClick] = useState(false);
    const [recoClick, setRecoClick] = useState(false);
    const [helpClick, setHelpClick] = useState(false);
    const [testClick, setTestClick] = useState(false);
    const [fontClick, setFontClick] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    const GoToFindPage = () => {
        setFindClick(true);
        setTimeout(()=>{
            navigate(`/AppFind`);
        },300);
       
    }

    const GoToRecoPage = () => {
        setRecoClick(true);
        setTimeout(()=>{
            navigate(`/Category`);
        },300);
    }

    const GoToHelpPage = () => {
        setHelpClick(true);
        setTimeout(()=>{
            navigate(`/Method`);
        },300);
    }

    const GoToTestPage = () => {
        setTestClick(true);
        setTimeout(()=>{
            navigate('/Test');
        },300);
    }

    const GoToFontPage = () => {
        setFontClick(true);
        setTimeout(()=>{
            navigate(`/fontsizeSetting`);
        },300);
    }
    
    const HomeIconsAnimation = styled.img`
        content: url(${ImageUrls[currentImageIndex]});
        width: 12%;
    `;

    const ChangeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageUrls.length);
    }

    useEffect(() => {
        const interval = setInterval(ChangeImage, 2800);
        return () => clearInterval(interval);
      }, []);

   
    return (
        <>
        <BackGround>
            <HomeNavigator/>
            <MainText>원하시는 서비스를<br/>선택해주세요</MainText>

            <Box>
                <FindBox onClick={GoToFindPage} active={findClick}>
                    <HomeIconsAnimation/>
                    <FindText>필요한 어플을 <br/>찾아드릴게요</FindText>
                </FindBox>

                <Row1>
                    <JustLookBox onClick={GoToRecoPage} active={recoClick}>
                        <JustLookText>분야별<br/>어플<br/>한눈에 보기</JustLookText>
                        <JustLookIcon src="/lookicon.svg"/>
                    </JustLookBox>

                    <TestBox onClick={GoToTestPage} active={testClick}>
                        <TestText>디지털<br/>활용능력<br/>테스트</TestText>
                        <TestIcon src="test.svg"/>
                    </TestBox>
                </Row1>

                <HelpBox onClick={GoToHelpPage} active={helpClick}>
                    <Circle>
                        <HelpIcon src="/help_white.svg"/>
                    </Circle>
                    <HelpText>도움이<br/>필요해요</HelpText>
                </HelpBox>

                <FontBox onClick={GoToFontPage} active={fontClick}>
                    <Circle>
                        <FontIcon src="/font_white.svg"/>
                    </Circle>
                    <FontText>글자 크기를<br/>바꾸고 싶어요</FontText>
                </FontBox>

            </Box>
        </BackGround>
        
        </>
    );
};

export default Home;