import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  NavBar,
  Start,
  MealForm,
  MealList,
  Logout
} from "./components";

import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";

const initialListItems = [
  { url: "/login", text: "Login" },
  { url: "/register", text: "Register" }
];

function App() {
  const [title, setTitle] = useState("welcome");
  const [menuItems, setMenuItems] = useState([...initialListItems]);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setTitle("my gigapets");
      if (localStorage.getItem("token"))
        setMenuItems([{ url: "/logout", text: "Logout" }]);
    } else if (location.pathname.includes("meal")) {
      const pet_id = location.pathname.split("/").pop();
      axiosWithAuth()
        .get(`/pets/${pet_id}`)
        .then(res => {
          const petName = res.data.name;
          location.pathname.includes("list")
            ? setTitle(`${petName}'s meal list`)
            : setTitle(`feed ${petName}`);
          console.log("ok");
        })
        .catch(err => console.log(err));
    } else setTitle(location.pathname.split("/").pop());
  }, [location.pathname]);
  return (
    <div className="App">
      <NavBar menuItems={menuItems} />
      <div className="nav-title text-center">
        <h4 className="p-2">{title}</h4>
      </div>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute
          path="/dashboard"
          component={props => (
            <Dashboard {...props} setMenuItems={setMenuItems} />
          )}
          setMenuItems={setMenuItems}
        />
        <PrivateRoute
          path="/meal-list/:petId"
          component={props => (
            <MealList {...props} setMenuItems={setMenuItems} />
          )}
        />
        <PrivateRoute
          path="/meal/:petId"
          component={props => (
            <MealForm {...props} setMenuItems={setMenuItems} />
          )}
        />
        <PrivateRoute
          exact
          path="/logout"
          component={props => (
            <Logout
              {...props}
              resetmenu={() => setMenuItems([...initialListItems])}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
