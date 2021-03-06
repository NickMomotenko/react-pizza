import React from "react";

import "./App.css";
import { Route } from "react-router-dom";

import MainContent from "./components/MainContent/MainContent";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={Login} />
      <Route path="/list" component={MainContent} />
      <Route path="/registration" component={Registration} />
    </div>
  );
};

export default App;
