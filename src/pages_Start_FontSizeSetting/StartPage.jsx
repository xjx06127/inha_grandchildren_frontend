import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Img = styled.img`
  content: url(startPageLogo.png);
  width: 50vw;
  height: 30vh;
  @media (orientation: landscape) {
    height: 50vh;
    width: 18vw;
    padding: 2%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60%;
  @media (orientation: landscape) {
    height: 100vh;
    padding: 0%;
    padding-top: 0.4%;
  }
`;

const MainButton = styled.div`
  border: 2px solid #ff8057;
  border-radius: 7px;
  color: #df7857;
  padding: 4%;
  font-weight: bold;
  margin-top: 15%;
  margin-bottom: 50%;
  @media (orientation: landscape) {
    margin-top: 0.1%;
    padding: 1%;
    margin-bottom: 3.5%;
  }

  &:hover {
    transition: 0.1s;
    color: #ffbca7;
  }
`;

const CopyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyRightImg = styled.img`
  margin-right: 2%;
`;

const CopyRightText = styled.p`
  font-size: 0.8rem;
  font-weight: lighter;
  color: #df7857;
  white-space: nowrap;
`;

const StartPage = () => {
  const navigate = useNavigate();
  const [isNew, SetIsNew] = useState("");

  useEffect(() => {
    SetIsNew(localStorage.getItem("IsNew"));
    let isRecoArr = localStorage.getItem("isRecoArr");

    if (isRecoArr == null) {
      let arr = new Array(100).fill(false);
      localStorage.setItem("isRecoArr", JSON.stringify(arr));
    }
  }, []);

  const GoToMain = () => {
    if (isNew == null || isNew == "true") {
      localStorage.setItem("IsNew", true);
      navigate(`/FontSizeSettingForNew`);
    } else {
      navigate(`/Main`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Div>
        <Img />
        <MainButton onClick={GoToMain}>시작하기</MainButton>
        <CopyBox>
          <CopyRightImg src="/copyright_color.svg" />
          <CopyRightText>
            INHA_GRANDCHILDRENS. All Rights Reserved.
          </CopyRightText>
        </CopyBox>
      </Div>
    </motion.div>
  );
};

export default StartPage;
