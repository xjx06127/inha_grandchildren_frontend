import { GlobalStyle } from "./GlobalStyle";
import { Link } from "react-router-dom";
import App_methods from "./pages_app_methods/App_methods";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FontSizeSetting from "./pages_Start_FontSizeSetting/FontSizeSetting";
import StartPage from "./pages_Start_FontSizeSetting/StartPage";
import Test from "./pages_Test/Test";
import Home from "./pages_home/Home";
import Category from "./pages_Category/Category";
import { FontSizeProvider } from "./pages_font_context/FontSizeProvider";

function App() {
  return (
    <FontSizeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/fontsizeSetting" element={<FontSizeSetting />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Main" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Method" element={<App_methods />} />
        </Routes>
      </BrowserRouter>
    </FontSizeProvider>
  );
}

export default App;
