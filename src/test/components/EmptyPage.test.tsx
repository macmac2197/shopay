import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EmptyPage from "../../components/EmptyPage/EmptyPage";

describe("EmptyPage Component Unit Test", () => {
  it("should render correct", () => {
    render(
      <MemoryRouter>
        <EmptyPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Empty Page")).toBeTruthy();

    const linkElement = screen.getByText("Back to homepage");

    expect(linkElement).toBeInTheDocument();
  });
});
