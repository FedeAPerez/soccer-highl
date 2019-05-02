import React from "react";
import { GetEmoji } from "../../lib/main";

const namespace = "fut-header";

const Header = () => (
  <header className={namespace}>
    <h1>Futbolín |</h1>
    <h2>
      Los últimos partidos, están acá. <GetEmoji id="soccer" />
    </h2>
  </header>
);

export default Header;
