import React, { useState, useEffect } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";

// https://getbootstrap.com/docs/4.4/components/spinners/

import GigapetCard from "./GigapetCard";
import "./styles/Dashboard.css";

// this component will be shown immediately after login.

const Dashboard = () => {
  const [view, setView] = useState();

  return (
    <>
      <GigapetCard
        key={0}
        id={0}
        name="example Gigapet"
        status="sorta hungry"
      />
    </>
  );
};

export default Dashboard;
