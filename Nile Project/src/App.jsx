import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Service from "./Service";

import Navbar from "./Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Service />
    </>
  );
}

export default App;
