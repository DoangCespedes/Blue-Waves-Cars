import { Outlet } from "react-router-dom";
import { Navbarr } from "./components/Navbarr";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (  
    <div>
      <Navbarr/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;