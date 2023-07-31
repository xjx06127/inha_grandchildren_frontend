import { GlobalStyle } from "./GlobalStyle";
import { Link } from "react-router-dom";
import App_methods from "./pages_app_methods/App_methods";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FontSizeSetting from "./pages_Start_FontSizeSetting/FontSizeSetting";
import StartPage from "./pages_Start_FontSizeSetting/StartPage";
import Test from "./pages_Test/Test";
import Home from "./pages_home/Home";
import Category from "./pages_Category/Category";
import Test2 from "./pages_Test/Test2";
import Test3 from "./pages_Test/Test3";
import Test4 from "./pages_Test/Test4";
import Test5 from "./pages_Test/Test5";
import Result from "./pages_Result/Result";
import { FontSizeProvider } from "./pages_font_context/FontSizeProvider";
import AppReco from "./pages_AppReco/AppReco";
import AppPage from "./pages_AppPage/AppPage";
import Analyze from "./pages_analyze/Analyze";
import { AnimatePresence } from "framer-motion";
import FontSizeSettingForNew from "./pages_Start_FontSizeSetting/FontSizeSettingForNew";
import TestForNew from "./pages_Test/TestForNew";

function App() {
  return (
    <FontSizeProvider>
      <GlobalStyle />
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/fontsizeSetting" element={<FontSizeSetting />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/Test2/:OX" element={<Test2 />} />
            <Route path="/Test3/:OX/:OX2" element={<Test3 />} />
            <Route path="/Test4/:OX/:OX2/:OX3" element={<Test4 />} />
            <Route path="/Test5/:OX/:OX2/:OX3/:OX4" element={<Test5 />} />
            <Route path="/Main" element={<Home />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Method" element={<App_methods />} />
            <Route
              path="/:OX/:OX2/:OX3/:OX4/:OX5/Result"
              element={<Result />}
            />
            <Route path="/AppReco" element={<AppReco />} />
            <Route path="/AppPage" element={<AppPage />} />
            <Route
              path="/:OX/:OX2/:OX3/:OX4/:OX5/Analyze"
              element={<Analyze />}
            />
            <Route path="/TestForNew" element={<TestForNew />} />
            <Route
              path="/fontsizeSettingfornew"
              element={<FontSizeSettingForNew />}
            />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </FontSizeProvider>
  );
}

export default App;
