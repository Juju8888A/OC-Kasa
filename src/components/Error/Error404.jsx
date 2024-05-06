import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
       <h2>404</h2>
       <p>Oups! La page que vous demandez n'existe pas.</p>
       <NavLink to="/" className="accueil-link">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default Error404;