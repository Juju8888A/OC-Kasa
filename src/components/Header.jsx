import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Kasa</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>

            <li>
              <NavLink to="/about">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
