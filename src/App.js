import React from "react";
import Matchs from "./matchs";
import "./base.css";

const getMessageHtml = element => {
  return { __html: element };
};

const Emoji = ({ children, ...props }) => (
  <span dangerouslySetInnerHTML={getMessageHtml(children)} />
);

const App = ({ children, ...props }) => {
  return (
    <section>
      <header>
        <h1>Futbolín |</h1>
        <h2>
          {" "}
          Los últimos partidos, están acá. <Emoji>&#x26BD</Emoji>
        </h2>
      </header>
      <Matchs />
      <footer>Con los aportes de ScoreBat.</footer>
    </section>
  );
};

export default App;
