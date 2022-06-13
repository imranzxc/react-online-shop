import React from "react";
import Cart from "./Cart";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>Intocode Coding Shopcamp</h1>
      <Cart />
    </header>
  );
};

export default Header;