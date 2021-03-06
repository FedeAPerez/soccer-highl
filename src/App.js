import React from "react";
import Leagues from "./features/leagues";
import Header from "./components/header";
import Footer from "./components/footer";
import Onboard from "./components/onboard";

import "./sass/_main.scss";

const App = ({ children, ...props }) => {
  return (
    <main>
      <Header />
      <Leagues />
      <Footer />
      <Onboard />
    </main>
  );
};

export default App;
