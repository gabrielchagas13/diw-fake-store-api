import React from "react";
import LoGo from "../../assets/react.svg";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Chagol the store</h1>
      <h1>Gabriel Chagas - Ciência da Computação - 803292 </h1>
    </header>
  );
};

export default Header;
