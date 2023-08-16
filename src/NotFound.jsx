import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontSizeContext } from "./pages_font_context/FontSizeProvider";

const Con = styled.div`
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  margin-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  font-family: "MICE";
  @media (orientation: landscape) {
    margin-top: 3%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.div`
  border: 2px solid #ff8057;
  border-radius: 7px;
  color: #df7857;
  padding: 6%;
  font-weight: bold;
  margin-top: 5vh;
  margin-bottom: 10vh;
  /* width: 50%; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.1rem";
      case "large":
        return "1.3rem";
      case "veryLarge":
        return "1.6rem";
    }
  }};
  @media (orientation: landscape) {
    margin-top: -5%;
    padding: 1%;
    margin-bottom: 3.5%;
  }

  &:hover {
    transition: 0.1s;
    color: #ffbca7;
  }
`;

const Img = styled.img`
  content: url(/startPageLogo.png);
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 10%;
  @media (orientation: landscape) {
    margin-top: 5%;
  }
`;
const NotFound = () => {
  const Back = () => {
    navigate(-1);
  };

  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: white;";

  return (
    <Con fS={fontSize}>
      페이지를
      <br /> 찾을 수 없습니다.
      <Div>
        <Img />
      </Div>
      <NextButton onClick={Back} fS={fontSize}>
        이전으로
      </NextButton>
    </Con>
  );
};

export default NotFound;
