import React from "react";
import { useRef } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projects.jsx";
import About from "./components/about.jsx";

const App = () => {
  const projectRef = (useRef < HTMLDivElement) | (null > null);
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default App;
