import React from "react";
import { getEmoji } from "../../lib/main";
import "./header.css";

const namespace = "fut-header";

const Header = () => (
  <header className={namespace}>
    <h1>Futbolín |</h1>
    <h2>Los últimos partidos, están acá. {getEmoji("soccer")}</h2>
  </header>
);

export default Header;
