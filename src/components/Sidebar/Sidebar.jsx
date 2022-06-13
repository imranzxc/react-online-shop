import React from "react";
import style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <ul className={style.list}>
      <li className={style.item}>Гаджеты и аксессуары</li>
      <li className={style.item}>Бытовая техника</li>
      <li className={style.item}>Прочее</li>
    </ul>
  );
}

export default Sidebar;