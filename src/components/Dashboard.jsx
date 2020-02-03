import React from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";

// https://getbootstrap.com/docs/4.4/components/spinners/

import MealCard from "./MealCard";

import "./styles/Dashboard.css";

// this component will be shown immediately after login.

const Dashboard = () => {
  // from here we
  //    add/select/edit
  //      child user gigapet account(s)
  //    create meal cards
  //    feed gigapets
  return (
    <div>
      <h1>dashboard</h1>;
      {/* 
      possibly:

        <switch>
          <parentView />
          <gigapetView />
          <etc... />
        </switch>

        (isolate and extract those views into stateless functional components)
        
        (domain specific language will need to be approved by & obtained from the backend developer)

      */}
    </div>
  );
};

export default Dashboard;
