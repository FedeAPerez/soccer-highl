import React from "react";
import Leagues from "./features/leagues";
import Header from "./components/header";
import Helper from "./components/helper";
import Footer from "./components/footer";
import "./sass/_main.scss";

const App = ({ children, ...props }) => {
  return (
    <main>
      <Header />
      <Helper />
      <Leagues />
      <Footer />
    </main>
  );
};

export default App;
