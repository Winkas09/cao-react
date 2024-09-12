import React, { useState, useEffect } from "react";
import "./HeaderSection.css";

const HeaderSection = () => {
  const navLinks = [
    "Studentams",
    "Karjeros centras",
    "Programos",
    "IT testas",
    "Apie mus",
    "Verslui",
    "Kontaktai",
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLanguage = (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    setIsLanguageOpen(!isLanguageOpen);
  };

  const closeLanguageDropdown = (event) => {
    if (!event.target.closest(".language")) {
      setIsLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeLanguageDropdown);
    return () => {
      document.removeEventListener("click", closeLanguageDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img
          src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
          alt="Logo"
        />
      </a>
      <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <button className="nav-button">{link}</button>
          </li>
        ))}
      </ul>
      <div className="right-section">
        <div className="language">
          <button id="language-button" onClick={toggleLanguage}>
            Language
          </button>
          {isLanguageOpen && (
            <div className="language-dropdown">
              <button>English</button>
              <button>Lithuanian</button>
              <button>Polish</button>
              <button>Russian</button>
            </div>
          )}
        </div>
        <button className="skambinti-button">SKAMBINTI</button>
        <button className="hamburger" onClick={toggleNav}>
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default HeaderSection;
