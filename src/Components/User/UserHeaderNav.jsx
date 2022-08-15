import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ExitSvg } from "../../Assets/ExitSvg";
import { FeedSvg } from "../../Assets/FeedSvg";
import { AddSvg } from "../../Assets/AddSvg";
import { StatsSvg } from "../../Assets/StatsSvg";
import { UserContext } from "../../Context/UserContext";

import style from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem");

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          area-aria-label="Menu"
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <FeedSvg />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <StatsSvg />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddSvg />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
