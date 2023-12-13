import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard/ProductCard";

describe("ProductCard Component Unit Test", () => {
  const productMock = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  };

  const addToBasketMock = jest.fn();

  it("should display the product details correct", () => {
    render(<ProductCard product={productMock} addToBasket={addToBasketMock} />);

    expect(screen.getByText(productMock.title)).toBeTruthy();
    expect(screen.getByText(`€ ${productMock.price}`)).toBeTruthy();
    expect(screen.getByText(`${productMock.discountPercentage}%`)).toBeTruthy();
    expect(screen.getByText(productMock.category)).toBeTruthy();
  });
  it("should show the git and heart icons when users hover the product card", () => {
    render(<ProductCard product={productMock} addToBasket={addToBasketMock} />);
    const cardElement = screen.getByTestId("product-card");

    fireEvent.mouseEnter(cardElement);

    const gitIcon = screen.getByTestId("git-icon");
    const heartIcon = screen.getByTestId("heart-icon");

    expect(gitIcon).toBeInTheDocument();
    expect(heartIcon).toBeInTheDocument();

    fireEvent.mouseLeave(cardElement);
  });
  it("should show Add to basket button when users hover the product card", () => {
    render(<ProductCard product={productMock} addToBasket={addToBasketMock} />);
    const cardElement = screen.getByTestId("product-card");

    fireEvent.mouseEnter(cardElement);

    expect(screen.getByText("Add to basket")).toBeTruthy();

    fireEvent.mouseLeave(cardElement);
  });
  it("should show out of stock when product stock is equal to 0", () => {
    const cloneProductMock = productMock;
    cloneProductMock.stock = 0; // set stock to 0

    render(
      <ProductCard product={cloneProductMock} addToBasket={addToBasketMock} />
    );

    const cardElement = screen.getByTestId("product-card");

    fireEvent.mouseEnter(cardElement);

    expect(screen.getByText("Out of stock")).toBeTruthy();

    fireEvent.mouseLeave(cardElement);
  });
});
