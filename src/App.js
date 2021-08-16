import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
