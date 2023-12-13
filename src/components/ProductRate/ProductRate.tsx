import React from "react";

import { ReactComponent as StarBlack } from "../../assets/icons/star-black.svg";
import { ReactComponent as StarWhite } from "../../assets/icons/star-white.svg";
import "./ProductRate.css";

interface IProductRate {
  rate: number;
  stock: number;
}

const ProductRate: React.FC<IProductRate> = (props: IProductRate) => {
  const { rate, stock } = props;
  const stars: number[] = [1, 2, 3, 4, 5]; // number of stars used for product rate

  return (
    <div className="container">
      {stars.map((idx) => (
        <div className="star" key={idx}>
          {idx <= rate ? <StarBlack /> : <StarWhite />}
        </div>
      ))}
      <div className="rate">
        {rate} {`(${stock})`}
      </div>
    </div>
  );
};

export default ProductRate;
