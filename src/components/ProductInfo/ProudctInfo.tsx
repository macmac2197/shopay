import React from "react";

import "./ProductInfo.css";

export interface IProductInfo {
  thumbnail: string;
  title: string;
  price: number;
}

const ProductInfo: React.FC<IProductInfo> = (props: IProductInfo) => {
  const { thumbnail, title, price } = props;
  return (
    <div className="product-info">
      <div className="image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="info-content">
        <div className="info-title">{title}</div>
        <div className="info-price">{`€ ${price}`}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
