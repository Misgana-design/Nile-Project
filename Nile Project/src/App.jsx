import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Service from "./Service";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Service />
      <Footer />
    </>
  );
}

export default App;
