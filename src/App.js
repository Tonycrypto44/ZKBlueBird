import React from "react";
import { Possibility, WhatGPT3, Header } from "./containers";
import { CTA, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />

    <Possibility />
    <CTA />
  </div>
);

export default App;
