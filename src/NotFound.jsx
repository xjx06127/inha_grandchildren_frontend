import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontSizeContext } from "./pages_font_context/FontSizeProvider";

const Text = styled.div`
  font-size: 4rem;
  color: white;
  font-weight: bold;
  padding-top: 57%;
  padding-left: 5%;
  font-family: "MICE";
`;

const Stext = styled.div`
  font-size: 2.1rem;
  color: white;
  font-weight: bold;
  padding-left: 7%;
  padding-top: 3%;
  font-family: "MICE";
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e38b6f;
`;

const NextButton = styled.button`
  width: 60%;
  height: 8vh;
  background: transparent;
  border-radius: 30px;
  color: white;
  margin-bottom: 10%;
  font-weight: bold;
  text-align: center;
  font-family: "MICE";
  font-size: 1.6rem;
  border-color: white;
  border-width: 7px;
  margin-left: 20%;
  border: 3px solid white;
  margin-top: 10%;
`;

const Img = styled.img`
  content: url(/people.svg);
  /* margin-top: 30%; */
  padding-top: 28.5%;
`;

const NotFound = () => {
  const Back = () => {
    navigate(-1);
  };

  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: white;";

  return (
    <Background>
      <Text>아이고!</Text>
      <Stext>
        페이지를
        <br /> 찾을 수 없어요.
      </Stext>
      <NextButton onClick={Back} fS={fontSize}>
        이전으로
      </NextButton>
      <Img />
    </Background>
  );
};

export default NotFound;
