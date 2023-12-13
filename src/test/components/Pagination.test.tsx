import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "../../components/Pagination/Pagination";

describe("Pagination Component Unit Test", () => {
  const onPageChangeMock = jest.fn();
  const dataMock = ["test1", "test2", "test3", "test4", "test5"];

  it("should render correct", () => {
    render(
      <Pagination
        currentPage={1}
        onPageChange={onPageChangeMock}
        itemsPerPage={4}
        data={dataMock}
      />
    );

    const totalPages = Math.ceil(dataMock.length / 4); // compute the total pages

    const prevButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(prevButton).toBeInTheDocument();
    expect(screen.getByText(`Page 1 of ${totalPages}`)).toBeTruthy();
    expect(nextButton).toBeInTheDocument();
  });
  it("should disabled previous button when curret page is equal to 1", () => {
    render(
      <Pagination
        currentPage={1}
        onPageChange={onPageChangeMock}
        itemsPerPage={4}
        data={dataMock}
      />
    );

    const prevButton = screen.getByText("Previous");

    expect(prevButton).toBeDisabled();
  });
  it("should call onPageChange when next button is click", () => {
    render(
      <Pagination
        currentPage={1}
        onPageChange={onPageChangeMock}
        itemsPerPage={4}
        data={dataMock}
      />
    );

    const nextButton = screen.getByText("Next");

    fireEvent.click(nextButton);

    expect(onPageChangeMock).toBeCalledTimes(1);
  });
});
