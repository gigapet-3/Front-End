import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./styles/Dashboard.css";

// check to see if logged in

const Start = props => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    // try to get a meal
    // /api/meals/:id
    axiosWithAuth()
      .get("/meals")
      .then(res => {
        console.log(res);
        res.status === 200 && setOk(true);
      });
  }, []);
  return <div className="Dashboard">welcome to Lambdipet</div>;
};

export default Start;
