import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  NavBar,
  Start,
  MealForm,
  MealList
} from "./components";
// import GigapetView from "./components/GigapetView";
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
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/meal-list/:petId" component={MealList} />
        <PrivateRoute path="/meal/:petId" component={MealForm} />
      </Switch>
    </div>
  );
}

export default App;
