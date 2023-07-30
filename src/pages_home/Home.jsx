import React from 'react';
import styled, {css} from "styled-components";
import Navigator from '../Navigator';
import { useState, useEffect} from 'react';

const BackGround = styled.div`
    background-image: url(/mainBackground.png);
    width: 100vw; 
    height: 40vh;
    background-size: cover;
    border-radius: 0 0 50px 60px / 0 0 12px 19px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15%;

`
const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3%;
`

const Row3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3%;
`

const Find = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: white;
    border-radius: 10px;
    width: 36%; 
    margin-right: 2%;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.6s;
        background-color: #df7857;

        ${FindText} {
          color: white;
        }

        content: url(/find_white.svg);
        width: 36%;
        min-height: 10.68rem;
        /* ${FindIcon}{
            content: url(/find_white.svg);
        } */
      }
    `
    }
`

const FindIcon = styled.img`
    width: 47%;
    height: 47%;
`

const FindText = styled.p`
    color: black;
    font-size: 1.3rem;
    margin-top: 20%;
    font-weight: bold;

`
const JustLook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: white;
    border-radius: 10px;
    width: 36%;
    margin-left: 2%;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.6s;
        background-color: #df7857;

        ${FindText} {
          color: white;
        }

        content: url(/look_white.svg);
        width: 36%;
        min-height: 10.68rem;
        /* ${FindIcon}{
            content: url(/find_white.svg);
        } */
      }
    `
    }
`
const JustLookIcon = styled.img`
    width: 47%;
    height: 47%;
`
const JustLookText = styled.p`
    color:black;
    font-size: 1.3rem;
    margin-top: 20%;
    font-weight: bold;
`


const Help = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: white;
    border-radius: 10px;
    width: 36%;
    margin-right: 2%;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.6s;
        background-color: #df7857;

        ${FindText} {
          color: white;
        }

        content: url(/help_white.svg);
        width: 36%;
        min-height: 10.68rem;
        /* ${FindIcon}{
            content: url(/find_white.svg);
        } */
      }
    `
    }
`


const HelpIcon = styled.img`
    width: 47%;
    height: 47%;
`

const HelpText = styled.p`
    color:black;
    font-size: 1.3rem;
    margin-top: 20%;
    font-weight: bold;

`


const GoToDigitalTest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: white;
    border-radius: 10px;
    width: 36%;
    margin-left: 2%;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.6s;
        background-color: #df7857;

        ${FindText} {
          color: white;
        }

        content: url(/test_white.svg);
        width: 36%;
        min-height: 10.68rem;
        /* ${FindIcon}{
            content: url(/find_white.svg);
        } */
      }
    `
    }
`

const TestIcon = styled.img`
    width: 47%;
    height: 47%;

`
const TestText = styled.p`
    color:black;
    font-size: 1.3rem;
    margin-top: 20%;
    font-weight: bold;

`


const ChangeFont = styled.div`
    display: flex;
    align-items: center;
    padding: 4%;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: white;
    border-radius: 10px;
    width: 85%;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);

    ${props =>
    props.active &&
    css`
      &:hover {
        transition: 1.6s;
        background-color: #df7857;

        ${FindText} {
          color: white;
        }

        content: url(/font_white.svg);
        width: 84%;
        /* ${FindIcon}{
            content: url(/find_white.svg);
        } */
      }
    `
    }

`

const ChangeIcon = styled.img`
    width: 47%;
    height: 47%;

`

const ChangeText = styled.p`
    color:black;
    font-size: 1.3rem;
    font-weight: bold;

`;


const Home = () => {
    const [findClick, setFindClick] = useState(false);
    const [recoClick, setRecoClick] = useState(false);
    const [helpClick, setHelpClick] = useState(false);
    const [testClick, setTestClick] = useState(false);
    const [fontClick, setFontClick] = useState(false);


    const GoToFindPage = () => {
        setFindClick(true);
    };

    useEffect(()=>{
        if(findClick){
    

        }
    },[findClick]);
    

    const GoToRecoPage = () => {
        setRecoClick(true);
    
    };

    useEffect(()=>{
        
    },[recoClick]);
    

    const GoToHelpPage = () => {
        setHelpClick(true);
    
    };

    useEffect(()=>{
        
    },[helpClick]);
    

    const GoToTestPage = () => {
        setTestClick(true);
    
    };

    useEffect(()=>{
        
    },[testClick]);
    

    const GoToFontPage = () => {
        setFontClick(true);
    
    };

    useEffect(()=>{
        
    },[fontClick]);


    return (
        <>
        <BackGround>
        <Navigator/>

        <Box>
            <Row1>
                <Find onClick={GoToFindPage} active={findClick}>
                    <FindIcon src="/findicon.svg"/>
                    <FindText>찾고 싶은<br/>기능이 있어요</FindText>
                </Find>

                <JustLook onClick={GoToRecoPage} active={recoClick}>
                    <JustLookIcon src="/lookicon.svg"/>
                    <JustLookText>그냥<br/>둘러볼게요</JustLookText>
                </JustLook>
            </Row1>
        
            <Row2>
                <Help onClick={GoToHelpPage} active={helpClick}>
                    <HelpIcon src="/help.svg"/>
                    <HelpText>도움이<br/>필요해요</HelpText>
                </Help>

                <GoToDigitalTest onClick={GoToTestPage} active={testClick}>
                    <TestIcon src="/test.svg"/>
                    <TestText>디지털 활용능력<br/>테스트하러 가기</TestText>
                </GoToDigitalTest>
            </Row2>

            <Row3>
                <ChangeFont onClick={GoToFontPage} active={fontClick}>
                    <ChangeIcon src="/textsize.svg"/>
                    <ChangeText>글자 크기를<br/>바꾸고 싶어요</ChangeText>
                </ChangeFont>
            </Row3>
        </Box>
       

        </BackGround>
        
        
        
        </>
    );
};

export default Home;