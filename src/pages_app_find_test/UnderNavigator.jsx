import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.div`
  color: #5f5f5f;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};
  margin-bottom: 10%;
  text-align: center;
  font-family: "MICE";
`;

const HomeIcon = styled.img`
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "33px";
      case "large":
        return "39px";
      case "veryLarge":
        return "48px";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "27px";
      case "large":
        return "30px";
      case "veryLarge":
        return "37px";
    }
  }};
  margin-top: 10%;
`;

const UnderNavigator = () => {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  return (
    <>
      <Box>
        <HomeIcon
          fS={fontSize}
          src="/GoHome.svg"
          onClick={() => navigate("/Main")}
        />
        <HomeButton fS={fontSize}>홈으로</HomeButton>
      </Box>
    </>
  );
};

export default UnderNavigator;
