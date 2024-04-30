import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <img src="./logo_kasa.webp" alt="logo du site kasa"/>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
            </li>

            <li>
              <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>A propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
