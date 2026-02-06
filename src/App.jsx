import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SpaceBackground from "./components/StartBackground";
import Home from "./pages/Home";

const App = () => {
  return (
    <SpaceBackground>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SpaceBackground>
  );
};

export default App;
