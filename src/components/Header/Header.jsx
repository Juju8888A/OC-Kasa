import React from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logos/logo_kasa.webp"

const Header = () => {
  return (
    <header>
      <div className="navbar">
      <NavLink to="/"><img src={logoHeader} alt="logo du site kasa"/></NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
            </li>

            <li>
              <NavLink to="/a-propos" className={(nav) => (nav.isActive ? "nav-active" : "")}>A propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
