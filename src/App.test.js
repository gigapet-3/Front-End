import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders log(in/out) link", () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkLogin = getByText(/login/i);
  expect(linkLogin).toBeInTheDocument();
});
