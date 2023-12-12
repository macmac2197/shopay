import React, { useState } from "react";
import ProductRate from "../ProductRate/ProductRate";
import AddButton from "../AddButton/AddButton";
import { useHistory } from "react-router-dom";
import { ProductInterface } from "../../types/ProductInterface";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as GitCompare } from "../../assets/icons/git-compare.svg";

import "./ProductCard.css";

interface IProductCard {
  product: ProductInterface;
  addToBasket: (product: ProductInterface) => void;
}

const ProductCard: React.FC<IProductCard> = ({ product, addToBasket }) => {
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
  const history = useHistory();
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

  const handleClickProduct = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    history.push("/empty"); // navigate to the empty page when user click product
  };

  const handleClickAddToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToBasket(product); // add product to basket
  };

  const handleOnClickActions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    alert("Feature not yet avaialble!");
  };

  return (
    <div
      className="card"
      key={id}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClickProduct}
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
              <div className="actions-btn" onClick={handleOnClickActions}>
                <GitCompare />
              </div>
              <div className="actions-btn" onClick={handleOnClickActions}>
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
          <AddButton
            title="Add to basket"
            handleClick={handleClickAddToBasket}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductCard;
