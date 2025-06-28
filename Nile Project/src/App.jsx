// src/App.jsx
import { useState } from "react";
import "./App.css";

import Navbar from "./Navbar.jsx";
import Service from "./Service.jsx";
import News from "./News.jsx";

function App() {
  const [activePage, setActivePage] = useState("service"); // default page

  const renderPage = () => {
    switch (activePage) {
      case "service":
        return <Service />;
      case "news":
        return <News />;
      default:
        return <Service />; // fallback
    }
  };

  return (
    <>
      <Navbar onNavigate={setActivePage} />
      {renderPage()}
    </>
  );
}

export default App;
