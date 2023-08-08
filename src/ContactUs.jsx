import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #F2F2F2;
    height: 100%;
    padding: 5%;
    padding-top: 7%;
`

const Text = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 4%;
    
`

const Row1 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3%;
    margin-left: 3%;
`

const Row2 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20%;
    margin-left: 3%;
`

const Row3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    
`

const CopyBox = styled.div`
display: flex;

`

const EmailImg = styled.img`
    margin-right: 4%;
`

const EmailText = styled.p`
    font-weight: bold;
    font-size: 1.1rem;
`

const CallImg = styled.img`
    margin-right: 4%;
`

const CallText = styled.p`
    font-weight: bold;
    font-size: 1.1rem;
`

const CopyRightImg = styled.img`
    margin-right: 1%;
`

const CopyRightText = styled.p`
    font-size: 0.8rem;
    white-space: nowrap;
`

const InstargramImg = styled.img`
    width: 15%;
    margin-top: 3%;
`

const GoToInstargram = () => {
    window.location.href = 'https://www.instagram.com/likelion_inha/';
}

const ContactUs = () => {

    return (
        <>
        <Background>
            <Text>고객 문의</Text>
            <Row1>
                <EmailImg src="/email.svg"/>
                <EmailText>inha_grandchildrens@naver.com</EmailText>
            </Row1>
            <Row2>
                <CallImg src="/call.svg"/>
                <CallText>032 - 000 - 0221</CallText>
            </Row2>
            <Row3>
                <CopyBox>
                    <CopyRightImg src="/copyright.svg"/>
                    <CopyRightText>INHA_GRANDCHILDRENS. All Rights Reserved.</CopyRightText>
                </CopyBox>
                <InstargramImg src="/instargram.svg" onClick={GoToInstargram}/>
            </Row3>
            
        </Background>
        </>
    );
};

export default ContactUs;