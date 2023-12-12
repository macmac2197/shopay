import React from "react";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as GitCompare } from "../../assets/icons/git-compare.svg";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-img">
          <img
            src="https://i.dummyjson.com/data/products/5/thumbnail.jpg"
            alt="Product"
          />
        </div>
        <div className="card-stock">Out of stock</div>
        <div className="card-actions">
          <div className="actions-btn">
            <GitCompare />
          </div>
          <div className="actions-btn">
            <HeartIcon />
          </div>
        </div>
        <div className="card-discount">35%</div>
      </div>
      <div className="card-category">Category</div>
      <div className="card-title">Card Title</div>
      <div className="card-price">Card Price</div>
      <div className="card-rating">Card Rating</div>
      <div className="card-divider" />
      <div className="card-button">
        <button type="button">Add To Basket</button>
      </div>
    </div>
  );
};

export default ProductCard;
