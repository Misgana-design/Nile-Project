import logo from "./assets/Logo.jpg";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Nile Care Logo" className="logo" />
        <span className="company-name">Nile Care</span>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line1" : ""}`}></div>
        <div className={`line ${isOpen ? "line2" : ""}`}></div>
        <div className={`line ${isOpen ? "line3" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Donation</a>
        </li>
        <li>
          <a href="#" className="active">
            Services
          </a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
