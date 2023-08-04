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


import SeedApp from "./pages_AppReco/SeedApp";
import SaessackApp from "./pages_AppReco/SaessackApp";
import FlowerApp from "./pages_AppReco/FlowerApp";
import YeolmaeApp from "./pages_AppReco/YeolmaeApp";
import TreeApp from "./pages_AppReco/TreeApp";

function App() {
  return (
    <FontSizeProvider>
      <GlobalStyle />
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
          <Route path="/:OX/:OX2/:OX3/:OX4/:OX5/Result" element={<Result />} />
          <Route path="/AppReco" element={<AppReco />} />
          <Route path="/AppPage" element={<AppPage />} />

          <Route path="/SeedApp" element={<SeedApp />} />
          <Route path="/SaessackApp" element={<SaessackApp />} />
          <Route path="/FlowerApp" element={<FlowerApp />} />
          <Route path="/YeolmaeApp" element={<YeolmaeApp />} />
          <Route path="/TreeApp" element={<TreeApp />} />
        </Routes>
      </BrowserRouter>
    </FontSizeProvider>
  );
}

export default App;
