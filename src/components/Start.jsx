import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./styles/Dashboard.css";

// check to see if logged in; forward to next appropriate path.

const Start = props => {
  const history = useHistory();
  useEffect(() => {
    // try to connect with the backend.
    axiosWithAuth()
      .get("/meals/")
      .then(res => {
        history.push("/dashboard");
      })
      .catch(err => history.push("/login"));
  }, [history]);

  return (
    <div className="Dashboard">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Start;
