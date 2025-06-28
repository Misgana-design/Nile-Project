// src/Navbar.jsx
import logo from "./assets/Logo.jpg";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Nile Care Logo" className="logo" />
        <span className="company-name">Nile Care</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line1" : ""}`}></div>
        <div className={`line ${isOpen ? "line2" : ""}`}></div>
        <div className={`line ${isOpen ? "line3" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#" onClick={() => onNavigate("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate("about")}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate("donation")}>
            Donation
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate("service")}>
            Services
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate("news")}>
            News
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
