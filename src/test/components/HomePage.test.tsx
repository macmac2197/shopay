import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../../components/HomePage/HomePage";

describe("EmptyPage Component Unit Test", () => {
  it("should render correct", () => {
    render(<HomePage />);

    expect(screen.getByText("Shopay")).toBeTruthy();
  });
});
