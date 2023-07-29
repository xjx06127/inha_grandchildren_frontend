
import Category from './pages_Category/Category';

import { GlobalStyle } from "./GlobalStyle";
import { Link } from "react-router-dom";
import App_methods from "./pages_app_methods/App_methods";



function App() {
  return (
    <>
    <GlobalStyle/>
    <Category/>
<App_methods></App_methods>
    </>
   
  );
}

export default App;