import React, { useState } from "react";
import logoSm from "../../commonResource/images/icons/logo-sm.png";
import searchIcon from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    setIsExpanded(false); // Collapse the menu when a link is clicked
  };

  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isExpanded}
              aria-label="Toggle navigation"
              onClick={handleToggle}
             
            >
              {isExpanded ? "X" : "☰"}
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img alt="logo" src={logoSm} />
            </Link>

            <div
              className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link" to="/mac" onClick={handleLinkClick}>
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/iphone"
                    onClick={handleLinkClick}
                  >
                    iPhone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/ipad"
                    onClick={handleLinkClick}
                  >
                    iPad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/watch"
                    onClick={handleLinkClick}
                  >
                    Watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tv" onClick={handleLinkClick}>
                    TV
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/music"
                    onClick={handleLinkClick}
                  >
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/support"
                    onClick={handleLinkClick}
                  >
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/search"
                    onClick={handleLinkClick}
                  >
                    <img alt="search" src={searchIcon} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/cart"
                    onClick={handleLinkClick}
                  >
                    <img alt="cart" src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
