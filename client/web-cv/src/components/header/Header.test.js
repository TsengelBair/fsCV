import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  test("renders nav links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const serviceLink = screen.getByText("Services");
    const educationLink = screen.getByText("Education");
    const contactsLink = screen.getByText("Contacts");

    expect(serviceLink.tagName).toBe("A");
    expect(serviceLink.getAttribute("href")).toBe("/");

    expect(educationLink.tagName).toBe("A");
    expect(educationLink.getAttribute("href")).toBe("/education");

    expect(contactsLink.tagName).toBe("A");
    expect(contactsLink.getAttribute("href")).toBe("/contacts");
  });
});
