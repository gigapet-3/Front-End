import React from "react";
import { Redirect } from "react-router-dom";

const Logout = props => {
  const { resetmenu } = props;
  localStorage.removeItem("token");
  resetmenu();

  return <Redirect to="/" />;
};

export default Logout;
