import React, { useState, useEffect } from "react";
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

import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from "./utils/axiosWithAuth";
function App() {
  const [title, setTitle] = useState("welcome");
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === "/dashboard") {
      setTitle("my gigapets");
    } else if (location.pathname.includes("meal")) {
      const pet_id = location.pathname.split("/").pop();
      console.log(`the pet id = ${pet_id} `);
      // axios /pets/:id
      axiosWithAuth()
        .get(`/pets/${pet_id}`)
        .then(res => {
          setTitle("welcome");
          const petName = res.data.name;
          if (location.pathname.includes("list")) {
            setTitle(`${petName}'s meal list`);
          } else {
            setTitle(`feed ${petName}`);
          }
          // if (location.pathname.includes(""))
          // location.pathname.includes("list")
          // ? `${petName}'s meal list`
          // : `feed ${petName}`
        });
    } else setTitle(location.pathname.split("/").pop());
  }, [location.pathname]);
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
