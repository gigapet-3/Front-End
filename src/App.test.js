import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders gigapet link", () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = getByText(/gigapet/i);
  expect(linkElement).toBeInTheDocument();
});
