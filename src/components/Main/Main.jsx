import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Main;