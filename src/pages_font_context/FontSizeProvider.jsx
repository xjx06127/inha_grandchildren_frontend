import React, { createContext, useState, useContext } from "react";

// Context 생성
const FontSizeContext = createContext();

// Context Provider 컴포넌트
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("normal");

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
