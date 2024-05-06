import React from "react";
import logoFooter from "../../assets/logos/logo_kasa_white.webp"

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={logoFooter} alt="logo du site kasa"/>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;