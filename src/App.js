import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Login, Register, Dashboard, NavBar, Start } from "./components";
import TestSpace from "./components/TestSpace"; // design space... temporary
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const location = useLocation();
  const title = location.pathname.replace("/", "") || "welcome";
  return (
    <div className="App">
      <NavBar />
      <div className="nav-title text-center">
        <h4 className="p-2">{title}</h4>
      </div>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/testcard" component={TestSpace} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
