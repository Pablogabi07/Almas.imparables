import React from "react";
import logo from "../assets/ohmlogo1.png"; // subí el logo a /public o /src/assets

const Header = () => (
  <header>
    <img src={logo} alt="Tropichicas Logo" className="logo" />
    <h1>Almas Imparables</h1>
    <p>Productos frescos y congelados</p>
    <a
      href="https://wa.me/5491162348510"
      className="btn-wsp"
      target="_blank"
      rel="noopener noreferrer"
    >
      Hacé tu pedido
    </a>
  </header>
);

export default Header;
