import React from "react";
import styled from "styled-components";

const Img = styled.img`
  content: url(startPageLogo.svg);
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50%;
  margin-bottom: 50%;
`;

const StartPage = () => {
  return (
    <Div>
      <Img />
    </Div>
  );
};

export default StartPage;
