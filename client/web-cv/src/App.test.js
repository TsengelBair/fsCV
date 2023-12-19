import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/Services/i);
  expect(linkElements.length).toBeGreaterThan(1);
});
