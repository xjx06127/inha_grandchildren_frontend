import React from 'react';
import styled from "styled-components";
import Navigator from '../Navigator';

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
    margin-top: 50px;

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
`

const Row3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Find = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: white;
    border-radius: 10px;
    width: 36%;
    margin-right: 5px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
`

const FindIcon = styled.img`
    width: 60px;
    height: 70px;

`

const FindText = styled.p`
    color:black;
    font-size: 25px;
    margin-top: 27px;

`
const JustLook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: white;
    border-radius: 10px;
    width: 36%;
    margin-left: 5px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
`

const JustLookIcon = styled.img`
    width: 60px;
    height: 70px;


`
const JustLookText = styled.p`
    color:black;
    font-size: 20px;
    margin-top: 27px;

`

const Help = styled.div`
    

`
const GoToDigitalTest = styled.div`
    

`

const ChangeFont = styled.div`
    

`

const Home = () => {
    return (
        <>
        <BackGround>
        <Navigator/>

        <Box>
            <Row1>
                <Find>
                    <FindIcon src="/findicon.svg"/>
                    <FindText>찾고 싶은<br/>기능이 있어요</FindText>
                </Find>

                <JustLook>
                    <JustLookIcon src="/lookicon.svg"/>
                    <JustLookText>그냥<br/>둘러볼게요</JustLookText>
                </JustLook>
            </Row1>
        
            <Row2>
                <Help>

                </Help>

                <GoToDigitalTest>

                </GoToDigitalTest>
            </Row2>

            <Row3>
                <ChangeFont>


                </ChangeFont>
            </Row3>
        </Box>
       

        </BackGround>
        
        
        
        </>
    );
};

export default Home;