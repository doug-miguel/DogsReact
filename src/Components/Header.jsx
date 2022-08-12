import React from "react";
import style from "./Header.module.css";

import { Link } from "react-router-dom";
import { Dog } from "../Assets/Dog";

import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={style.headers}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        {data ? (
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
