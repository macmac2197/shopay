import React from "react";
import { render, screen } from "@testing-library/react";
import ProductInfo from "../../components/ProductInfo/ProudctInfo";

describe("ProductInfo Component Unit Test", () => {
  it("should display product information correct", () => {
    const infoMock = {
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      title: "Test Title",
      price: 100,
    };
    render(<ProductInfo {...infoMock} />);

    const productImage = screen.getByAltText(infoMock.title);

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute("src", infoMock.thumbnail);

    expect(screen.getByText(infoMock.title)).toBeTruthy();
    expect(screen.getByText(`€ ${infoMock.price}`)).toBeTruthy();
  });
});
