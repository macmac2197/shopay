import React, { useState } from "react";
import ProductRate from "../ProductRate/ProductRate";
import { ProductInterface } from "../../types/ProductInterface";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as GitCompare } from "../../assets/icons/git-compare.svg";

import "./ProductCard.css";

const ProductCard: React.FC<ProductInterface> = (product: ProductInterface) => {
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    stock,
    category,
    thumbnail,
  } = product;

  const [isShowAdd, setIsShowAdd] = useState<boolean>(false);
  const [isProductActive, setIsProductActive] = useState<boolean>(false);
  const [isShowOutOfStock, setIsShowOutOfStock] = useState<boolean>(false);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // check product stock
    if (stock > 0) {
      setIsShowAdd(true); // show add to basket button
      setIsShowOutOfStock(false); // hide out of stock label
    } else {
      setIsShowOutOfStock(true); // show out of stock label
    }
    setIsProductActive(true); // set product active when user hovers over product
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsShowAdd(false); // hide add to basket button
    setIsProductActive(false); // set product in-active when user hoversout over product
    setIsShowOutOfStock(false); // hide out of stock label
  };

  return (
    <div
      className="card"
      key={id}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <div className="card-img">
          <img src={thumbnail} alt={title} />
        </div>
        {isShowOutOfStock && <div className="card-stock">Out of stock</div>}
        {/* Product actions button */}
        {isProductActive && (
          <React.Fragment>
            <div className="card-actions">
              <div className="actions-btn">
                <GitCompare />
              </div>
              <div className="actions-btn">
                <HeartIcon />
              </div>
            </div>
          </React.Fragment>
        )}
        <div
          className={`card-discount ${isProductActive && "text-red"}`}
        >{`${discountPercentage}%`}</div>
      </div>
      <div className="card-category">{category}</div>
      <div className="card-title">{title}</div>
      <div className="card-price">{`€ ${price}`}</div>
      {/* Product rating */}
      <ProductRate rate={rating} stock={stock} />
      {/* Add to basket button */}
      {isShowAdd && (
        <React.Fragment>
          <div className="card-divider" />
          <div className="card-button">
            <button type="button">Add To Basket</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductCard;
