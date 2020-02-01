import React from "react";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Login />

    </div>
  );
}

export default App;
