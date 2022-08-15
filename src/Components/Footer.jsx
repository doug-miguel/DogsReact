import React from "react";

import style from "./Footer.module.css";

import { DogsFooterSvg } from "../Assets/DogsFooterSvg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <DogsFooterSvg />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
