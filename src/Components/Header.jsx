import React from "react";
import style from "./Header.module.css";

import { Link } from "react-router-dom";
import { Dogs } from "../Assets/dogs";

const Header = () => {
  return (
    <header className={style.headers}>
      <nav className={`${style.logo} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={style.login} to="/login">
          Login / Criar Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
