import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Img = styled.img`
  content: url(startPageLogo.png);
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 세로 중앙 정렬을 위해 추가합니다. */
  height: 100vh; /* 화면 높이의 100%를 차지하도록 설정합니다. */
`;

const StartPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isNew = localStorage.getItem("IsNew");
    let arr = new Array(100).fill(false);
    localStorage.setItem("isRecoArr", JSON.stringify(arr));
    if (isNew == null) {
      setTimeout(() => {
        navigate(`/FontSizeSettingForNew`);
      }, 2300);
    } else {
      setTimeout(() => {
        navigate(`/Main`);
      }, 2300);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Div>
        <Img />
      </Div>
    </motion.div>
  );
};

export default StartPage;
