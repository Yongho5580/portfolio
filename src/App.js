import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
