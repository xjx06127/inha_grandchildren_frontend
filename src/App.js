import Home from "./pages_home/Home";
import { GlobalStyle } from "./GlobalStyle";

import Category from "./pages_Category/Category";

import { Link } from "react-router-dom";
import App_methods from "./pages_app_methods/App_methods";

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
      <GlobalStyle />
      <Home />
      <Category />
      <App_methods></App_methods>
    </>
  );
}

export default App;
