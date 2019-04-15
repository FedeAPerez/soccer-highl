import React from "react";
import Leagues from "./features/leagues";
import Header from "./components/header";
import Footer from "./components/footer";
import "./base.css";

const App = ({ children, ...props }) => {
  return (
    <main>
      <Header />
      <Leagues />
      <Footer />
    </main>
  );
};

export default App;
