import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddButton from "../../components/AddButton/AddButton";

describe("AddButton Component Unit Test", () => {
  const handleClickMock = jest.fn();
  const titleMock = "Test";

  it("should have a label title", () => {
    render(<AddButton title={titleMock} handleClick={handleClickMock} />);

    const addButton = screen.getByText(titleMock);

    expect(addButton).toBeTruthy();
  });
  it("should call handleClick when button is click", () => {
    render(<AddButton title={titleMock} handleClick={handleClickMock} />);

    const addButton = screen.getByText(titleMock);

    fireEvent.click(addButton);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
