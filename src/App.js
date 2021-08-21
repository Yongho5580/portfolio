import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import MoreInfo from "./routes/MoreInfo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/more">
            <MoreInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
