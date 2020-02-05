import React from "react";
// https://getbootstrap.com/docs/4.4/components/spinners/

import GigapetCard from "./GigapetCard";
import "./styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="gigapet-cards">
        <GigapetCard
          key={0}
          id={0}
          name="example Gigapet"
          status="sorta hungry"
        />
      </div>
    </div>
  );
};

export default Dashboard;
