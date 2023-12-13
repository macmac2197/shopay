import React from "react";
import { render, screen } from "@testing-library/react";
import ProductRate from "../../components/ProductRate/ProductRate";

describe("ProductRate Component Unit Test", () => {
  it("should display product rate", () => {
    render(<ProductRate rate={4} stock={1000} />);

    expect(screen.getByText("4 (1000)")).toBeTruthy();
  });
});
