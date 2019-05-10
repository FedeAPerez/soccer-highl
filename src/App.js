import React from "react";
import Leagues from "./features/leagues";
import Header from "./components/header";
import Helper from "./components/helper";
import Footer from "./components/footer";
import Onboard from "./components/onboard";

import "./sass/_main.scss";

const App = ({ children, ...props }) => {
  return (
    <main>
      <Header />
      <Helper />
      <Leagues />
      <Footer />
      <Onboard />
    </main>
  );
};

export default App;
