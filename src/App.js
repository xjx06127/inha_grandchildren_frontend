import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pagesHongseok/StartPage";
import FontSizeSetting from "./pagesHongseok/FontSizeSetting";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/fontsizeSetting" element={<FontSizeSetting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
