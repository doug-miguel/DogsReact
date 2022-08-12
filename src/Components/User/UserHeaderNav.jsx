import React from "react";
import { NavLink } from "react-router-dom";
import { Sair } from "../../Assets/sair";
import { Feed } from "../../Assets/Feed";
import { Adicionar } from "../../Assets/Adicionar";
import { Estatisticas } from "../../Assets/Estatisticas";
import { UserContext } from "../../Context/UserContext";

import style from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={style.nav}>
      <NavLink to="/conta" end>
        <Feed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
        {mobile && "Adicionar Fotos"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
