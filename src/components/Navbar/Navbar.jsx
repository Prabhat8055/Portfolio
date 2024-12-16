import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-navbar">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">ReFolio</Link>
      </div>

      {/* Menu Container */}
      <div className={`menu-container ${isMenuOpen ? "active" : ""}`}>
        {/* Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span>MENU</span>
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Projects</Link>
          <Link to="/bento">More</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
