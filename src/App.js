import { Outlet } from "react-router";
import "./App.css";

import Footer from "./Footer";
import NavBar from "./NavBar";
import SideComponents from "./SideComponents";
import { useContext } from "react";
import { DarkModeContext } from "./Contexts/DarkModeContext";

function App() {
  const { Darkmode } = useContext(DarkModeContext);

  return (
    <div className={`App ${Darkmode? " bg-black":""}`}>
      <NavBar />
      <SideComponents />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
