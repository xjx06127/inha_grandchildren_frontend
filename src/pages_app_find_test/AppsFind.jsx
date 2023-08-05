import React from 'react';
import styled, {css} from "styled-components";
import GrayNavigator from './GrayNavigator';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const MainText = styled.h1`
    text-align: center;
    margin-top: 7%;
`

const Highlight = styled.span`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffd05d 50%);
`;

const Highlight2 = styled.span`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #C5D3AB 50%);
`

const Apps = styled.div`
    
`;

const AppBox = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 10%; /* 각 Box 요소의 아래 간격 설정 */
  /* &:nth-child(2n + 1) {
    margin-right: auto;
  } */
    padding: 5%;
    margin: 5%;
`;

const AppImg = styled.img`
    width: 30%;
    height: 30%;
    border-radius: 5px;
`;

const AppName = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 3%;
`

const AppLevel = styled.p`
    font-size: 1.2rem;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5%;
    width:65%;
`

const GoToDetail = styled.p`
    font-size: 1.3rem;
    text-align: right;
    color: #617143;
    text-decoration: underline;
    margin-top: 1%;

    &:hover{
    transition:0.4s;
    font-weight: bold;
   }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: 7%;
`

const GoToAppDetail = () => {

}

const AppsFind = () => {
    const {appfield} = useParams();
    const [apps,setApps] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .post(`https://forgrandparents.store/recommend/`,{
                field: appfield
            })
            .then((res)=>{
                setApps(res.data);
                console.log(res.data);          
            })
    },[])

    return (
        <>
        <GrayNavigator/>
        <MainText><Highlight>적절한 어플</Highlight>을<br/>찾아봤어요!</MainText>
        
        
        <Apps>
              {apps.map((index)=>(
                    <AppBox>
                        <AppImg src={index.image}/>
                        <TextBox>
                            <AppName>{index.name}</AppName>
                        <AppLevel>난이도 : 
                            
                            {
                            index.levelvalue === 0 ? ' 씨앗' : 
                            index.levelvalue === 1 ? ' 새싹' :
                            index.levelvalue === 2 ? ' 꽃용' :
                            index.levelvalue === 3 ? ' 열매용' :
                            index.levelvalue === 4 ? ' 나무용' :
                            index.levelvalue === 5 ? ' 나무용' :
                            'level정보가 존재하지 않습니다'                            
                            }
                            
                            </AppLevel>
                        <GoToDetail onClick={()=>{
                            navigate(`../AppPage/${index.id}`)
                        }}>자세히</GoToDetail>
                        </TextBox>
                    </AppBox>
              ))}  
        </Apps>
        </>
    );
};

export default AppsFind;