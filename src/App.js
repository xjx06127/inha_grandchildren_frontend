import { GlobalStyle } from "./GlobalStyle";

import Category from "./pages_Category/Category";

import { Link } from "react-router-dom";
import App_methods from "./pages_app_methods/App_methods";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FontSizeSetting from "./pagesHongseok/FontSizeSetting";
import StartPage from "./pagesHongseok/StartPage";
import Test from "./pages_Test/Test";
import Home from "./pages_home/Home";
import Category from "./pages_Category/Category";


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/fontsizeSetting" element={<FontSizeSetting />} />
          <Route path="/Test" element={<Test/>}/>
          <Route path="/Main" element={<Home/>}/>
          <Route path="/Category" element={<Category/>}/>
    

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
