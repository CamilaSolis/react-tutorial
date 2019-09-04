import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Install from "./components/Install/Install";
import Styles from "./components/Styles/Styles";
import Command from "./components/Command/Command";
import Component from "./components/Component/Component";
import Import from "./components/Import/Import";
import Prop from "./components/Prop/Prop";
import Form from "./components/Form/Form";
import Validate from "./components/Validate/Validate";
import Buttons from "./components/Buttons/Buttons";
import Input from "./components/Input/Input";
import Data from "./components/Data/Data";
import Api from "./components/Api/Api";
import Table from "./components/Tables/Tables";

import logo from './Img/react-logo.png';
import "./App.scss";

function App() {
  return (
    <Router>
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src={logo} />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
    <div className="container">
      <div class="columns">
        <div class="column is-one-fifth">
          <Menu />
        </div>
        <div class="column">
          <Switch>
            <Route path="/intro" component={ Intro } />
            <Route path="/install" component={ Install } />
            <Route path="/styles" component={ Styles } />
            <Route path="/command" component={ Command } />
            <Route path="/component" component={ Component } />
            <Route path="/import" component={ Import } />
            <Route path="/prop" component={ Prop } />
            <Route path="/form" component={ Form } />
            <Route path="/validate" component={ Validate } />
            <Route path="/buttons" component={ Buttons } />
            <Route path="/input" component={ Input } />
            <Route path="/data" component={ Data } />
            <Route path="/api" component={ Api } />
            <Route path="/table" component={ Table } />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

document.getElementById("root");

export default App;
