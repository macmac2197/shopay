import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DialogBox from "../../components/DialogBox/DialogBox";

describe("DialogBox Component Unit Test", () => {
  const onCloseMock = jest.fn();

  it("should have a dialog title", () => {
    render(<DialogBox onClose={onCloseMock} />);

    expect(screen.getByText("Successfully added to basket")).toBeTruthy();
  });
  it("should call onClose when button is click", () => {
    render(<DialogBox onClose={onCloseMock} />);

    const iconElement = screen.getByRole("img");
    fireEvent.click(iconElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
