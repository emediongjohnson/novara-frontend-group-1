import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Utility function to handle smooth scrolling */
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">🪐</span>
          <span className="logo-text">Planet</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>
            Home
          </a>

          <a href="#planets" onClick={(e) => { e.preventDefault(); handleScroll("planets-section"); }}>
            Planets
          </a>

          <a href="#data" onClick={(e) => { e.preventDefault(); handleScroll("data-section"); }}>
            Data
          </a>

          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact-section"); }}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>
            Home
          </a>

          <a href="#planets" onClick={(e) => { e.preventDefault(); handleScroll("planets-section"); }}>
            Planets
          </a>

          <a href="#data" onClick={(e) => { e.preventDefault(); handleScroll("data-section"); }}>
            Data
          </a>

          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact-section"); }}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;