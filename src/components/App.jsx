import React from "react";
import style from "./App.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;