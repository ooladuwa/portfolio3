import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import FlowerBorder from "./components/FlowerBorder";
import Seedlings from "./components/Seedlings";
import Sunshine from "./components/Sunshine";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <div className="flower-border">
          <FlowerBorder />
          </div>
          <div className="Seedlings">
            <Seedlings />
          </div>
          <div className="Sunshine">
            <Sunshine />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
