import React from "react";

import style from "./Footer.module.css";

import { DogsFooter } from "../Assets/DogsFooter";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <DogsFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
