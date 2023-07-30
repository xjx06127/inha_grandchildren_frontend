import React from "react";
import styled from "styled-components";

const Img = styled.img``;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 세로 중앙 정렬을 위해 추가합니다. */
  height: 100vh; /* 화면 높이의 100%를 차지하도록 설정합니다. */
`;

const StartPage = () => {
  return (
    <Div>
      <Img src={"startPageLogo.svg"} />
    </Div>
  );
};

export default StartPage;
