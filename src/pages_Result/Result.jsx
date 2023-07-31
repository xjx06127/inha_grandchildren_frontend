import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Navigator from "../Navigator";
import TestNavigator from "../pages_Test/TestNavigator";
import "../pages_Test/Bar.css";
import confetti from "canvas-confetti";

const Comment1 = styled.p`
  /* 디지털 레벨을 분석했어요! */
  font-size: 1.6rem;
  margin-left: 10%;
  margin-top: 17%;
`;

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #ffd05d 50%);
  font-weight: bold;
`;

const Circle = styled.div`
  width: 240px;
  height: 240px;

  background: #f8f8f8;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.09);
  border-radius: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15%;
`;

const VertiBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelComment = styled.p`
  /* OO 레벨 */

  font-weight: 700;
  font-size: 1.6rem;
  color: #000000;
`;

const LevelComment2 = styled.p`
  /* 짧은 설명이 들어가면 좋을 것 같은데 */

  font-size: 1.3rem;
  width: 50%;
  text-align: center;
  color: #000000;
  margin-top: 5%;
`;

const Img = styled.img`
  width: 55px;
  height: 90px;
`;

const Btn = styled.button`
  width: 308px;
  height: 59px;

  background: #617143;
  border-radius: 30px;

  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;

  color: #ffffff;
  border: none;

  margin-top: 20%;
  margin-bottom: 20%;
`;

const Result = () => {
  function firework() {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 40,
      startVelocity: 55,
      colors: ["#f5428d", "#f7be16", "#0b95a1"], // 새로운 색상을 지정
      gravity: 0.8, // 추가된 모션: 중력 적용
    });
    fire(0.2, {
      spread: 80,
      colors: ["#6f2dbd", "#22cc88", "#ff6600"], // 새로운 색상을 지정
      gravity: 0.7, // 추가된 모션: 중력 적용
    });
    fire(0.35, {
      spread: 110,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#8c52ff", "#00ccff", "#ff0099"], // 새로운 색상을 지정
      gravity: 0.9, // 추가된 모션: 중력 적용
    });
    fire(0.1, {
      spread: 130,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#ff3355", "#22ddaa", "#ffd700"], // 새로운 색상을 지정
      gravity: 0.6, // 추가된 모션: 중력 적용
    });
    fire(0.1, {
      spread: 150,
      startVelocity: 45,
      colors: ["#008080", "#ff33cc", "#66cc00"], // 새로운 색상을 지정
      gravity: 0.5, // 추가된 모션: 중력 적용
    });
  }

  const navigate = useNavigate();
  const { OX, OX2, OX3, OX4, OX5 } = useParams();
  const [imgSrc, setImgSrc] = useState("");
  const [level, setLevel] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .post(`https://forgrandparents.store/leveltest/`, {
        q1: OX,
        q2: OX2,
        q3: OX3,
        q4: OX4,
        q5: OX5,
      })
      .then((res) => {
        firework();
        const correctNum = res.data.count;
        const newLevel = res.data.result;
        let newImgSrc = "";
        let newComment = "";

        if (correctNum === 0) {
          newImgSrc = "/Seed.svg";
          newComment = "씨앗용 멘트";
        } else if (correctNum === 1) {
          newImgSrc = "/Saessack.svg";
          newComment = "새싹용 멘트";
        } else if (correctNum === 2) {
          newImgSrc = "/Flower.svg";
          newComment = "꽃용 멘트";
        } else if (correctNum >= 3 && correctNum <= 4) {
          newImgSrc = "/Yeolmae.svg";
          newComment = "열매용 멘트";
        } else if (correctNum === 5) {
          newImgSrc = "/Tree.svg";
          newComment = "나무용 멘트";
        }

        setImgSrc(newImgSrc);
        setLevel(newLevel);
        setComment(newComment);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [OX, OX2, OX3, OX4, OX5]);

  return (
    <>
      <TestNavigator />
      <Comment1>
        <Highlight>디지털 레벨</Highlight>을<br />
        분석했어요!
      </Comment1>
      <VertiBox>
        <Circle>
          {imgSrc && <Img src={imgSrc} />}
          {level && <LevelComment>{level} 레벨</LevelComment>}
        </Circle>
        {comment && <LevelComment2>{comment}</LevelComment2>}
        <Btn
          onClick={() => {
            navigate(`/Main`);
          }}
        >
          디지털 레벨을 올려보세요! 👍
        </Btn>
      </VertiBox>
    </>
  );
};

export default Result;
