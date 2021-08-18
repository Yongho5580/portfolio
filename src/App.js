import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
