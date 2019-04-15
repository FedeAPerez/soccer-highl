import React from "react";
import { Emoji } from "../../lib/main";
import "./header.css";

const namespace = "fut-header";

const Header = () => (
  <header className={namespace}>
    <h1>Futbolín |</h1>
    <h2>
      Los últimos partidos, están acá. <Emoji>&#x26BD</Emoji>
    </h2>
  </header>
);

export default Header;
