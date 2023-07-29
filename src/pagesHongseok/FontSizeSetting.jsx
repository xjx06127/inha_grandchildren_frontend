import React, { useState } from "react";
import styled from "styled-components";

const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  width: 100vw;
  height: 40vh;
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
`;

const P = styled.p`
  font-size: 25px;
`;

const ExBox = styled.div`
  width: 314px;
  height: 168px;

  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const VertiBox = styled.div`
  /*선택지랑 예시 문구 세로로 묶는 box*/
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Option = styled.div`
  /* 선택지 하나하나 control */

  width: 314px;
  height: 66px;

  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  color: #000000;
  box-sizing: border-box;

  margin-bottom: 10px;

`;

const Label1 = styled.p`
  font-size: 25px;
`;

const Label2 = styled.p`
  font-size: 30px;
`;

const Label3 = styled.p`
  font-size: 35px;
`;

const Title = styled.h1`
  color: #ffffff;
  width: 300px;
`;

const Logo = styled.img`
  content: url(text.png);
`;

const VertiBox2 = styled.div`
  margin-top: 23%;
  margin-bottom: 5%;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 10%;
  margin-bottom: 10%;
`;

const CancelBtn = styled.button`
  width: 78px;
  height: 39px;

  background: #f4f4f4;
  border-radius: 5px;
  border: none;
  margin-right: 5%;
`;

const CancelP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const SetBtn = styled.button`
  width: 120px;
  height: 39px;

  background: linear-gradient(97.27deg, #df7857 0%, #e7ab9a 100%);
  border-radius: 5px;
  border: none;
`;

const SetP = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  color: #ffffff;
`;

const FontSizeSetting = () => {
  const [fontSize, setFontSize] = useState("normal");

  const handleRadioChange = (event) => {
    setFontSize(event.target.name);
  };

  return (
    <BackGround>
      <VertiBox>
        <VertiBox2>
          <Logo />
          <Title>원하는 글자 크기를 선택해 주세요</Title>
        </VertiBox2>
        <ExBox>
          <p
            style={{
              fontSize:
                fontSize === "normal"
                  ? "25px"
                  : fontSize === "large"
                  ? "30px"
                  : "35px",
            }}
          >
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
          </p>
        </ExBox>
        <Div className="select">
          <Option>
            <Label1 htmlFor="select">보통</Label1>
            <input
              type="radio"
              name="normal"

              checked={fontSize === "normal"}
              onChange={handleRadioChange}
            />
          </Option>
          <Option>
            <Label2 htmlFor="select2">크게</Label2>
            <input
              type="radio"
              name="large"
              checked={fontSize === "large"}
              onChange={handleRadioChange}
            />
          </Option>
          <Option>
            <Label3 htmlFor="select3">매우 크게</Label3>
            <input
              type="radio"
              name="veryLarge"
              checked={fontSize === "veryLarge"}
              onChange={handleRadioChange}
            />
          </Option>
        </Div>
        <ButtonBox>
          <CancelBtn>
            <CancelP>취소</CancelP>
          </CancelBtn>
          <SetBtn>
            <SetP>설정하기</SetP>
          </SetBtn>
        </ButtonBox>
      </VertiBox>
    </BackGround>
  );
};

export default FontSizeSetting;
