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
import AppPage from "./pages_AppPage/AppPage";
import Analyze from "./pages_analyze/Analyze";
import { AnimatePresence } from "framer-motion";
import FontSizeSettingForNew from "./pages_Start_FontSizeSetting/FontSizeSettingForNew";
import TestForNew from "./pages_Test/TestForNew";
import NotFound from "./NotFound";
import Level1Reco from "./pages_AppReco/Level1Reco";
import Level2Reco from "./pages_AppReco/Level2Reco";
import Level3Reco from "./pages_AppReco/Level3Reco";
import Level4Reco from "./pages_AppReco/Level4Reco";
import Level5Reco from "./pages_AppReco/Level5Reco";
import RecoApp from "./pages_AppReco/RecoApp";
import FirstChoosePage from "./pages_app_find_test/FirstChoosePage";
import LivingAppTest from "./pages_app_find_test/living/LivingAppTest";
import Finance from "./pages_app_find_test/living/Finance";
import SearchLoad from "./pages_app_find_test/living/SearchLoad";
import Delivery from "./pages_app_find_test/living/Delivery";
import AppsFind from "./pages_app_find_test/AppsFind";
import HobbyAppTest from "./pages_app_find_test/hobby/HobbyAppTest";
import Indoor from "./pages_app_find_test/hobby/Indoor";
import Outdoor from "./pages_app_find_test/hobby/Outdoor";
import HealthyAppTest from "./pages_app_find_test/healthy/HealthyAppTest";
import HealthCare from "./pages_app_find_test/healthy/HealthCare";
import Treatment from "./pages_app_find_test/healthy/Treatment";
import CommunityAppTest from "./pages_app_find_test/community/CommunityAppTest";
import TestAppPage from "./pages_AppPage/TestAppPage";
import FindAnalyze from "./pages_analyze/FindAnalyze";

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
            {/* <Route path="/AppPage/:id" element={<AppPage />} /> */}
            <Route path="/AppPage/:id" element={<TestAppPage />} />
            <Route
              path="/:OX/:OX2/:OX3/:OX4/:OX5/Analyze"
              element={<Analyze />}
            />
            <Route path="/TestForNew" element={<TestForNew />} />
            <Route
              path="/fontsizeSettingfornew"
              element={<FontSizeSettingForNew />}
            />
            <Route path="/RecoApp" element={<RecoApp />} />
            <Route path="/level1" element={<Level1Reco />} />
            <Route path="/level2" element={<Level2Reco />} />
            <Route path="/level3" element={<Level3Reco />} />
            <Route path="/level4" element={<Level4Reco />} />
            <Route path="/level5" element={<Level5Reco />} />

            <Route path="/AppFind" element={<FirstChoosePage />} />
            <Route path="/FindAnalyze/:appfield" element={<FindAnalyze />} />
            <Route path="/AppsFindResult/:appfield" element={<AppsFind />} />

            <Route path="/LivingAppsFind1" element={<LivingAppTest />} />
            <Route path="/FinanceAppsFind" element={<Finance />} />
            <Route path="/SearchLoadsAppsFind" element={<SearchLoad />} />
            <Route path="/DeliveryAppsFind" element={<Delivery />} />

            <Route path="/HobbyAppTest1" element={<HobbyAppTest />} />
            <Route path="/IndoorAppsFind" element={<Indoor />} />
            <Route path="/OutdoorAppsFind" element={<Outdoor />} />

            <Route path="/HealthyAppTest1" element={<HealthyAppTest />} />
            <Route path="/HealthCareAppsFind" element={<HealthCare />} />
            <Route path="/TreatmentAppsFind" element={<Treatment />} />

            <Route path="/CommunityAppsFind" element={<CommunityAppTest />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </FontSizeProvider>
  );
}

export default App;