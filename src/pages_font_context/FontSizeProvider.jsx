import React, { createContext, useState, useEffect } from "react";

// Context 생성
const FontSizeContext = createContext();

// Context Provider 컴포넌트
export const FontSizeProvider = ({ children }) => {
  // 로컬 스토리지에서 폰트 크기 설정을 불러옴
  const storedFontSize = localStorage.getItem("fontSize");
  const initialFontSize = storedFontSize ? storedFontSize : "normal";
  const [fontSize, setFontSize] = useState(initialFontSize);

  // 폰트 크기가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export { FontSizeContext };
