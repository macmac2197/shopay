import React from "react";
import Products from "../Products/Products";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="title">
        <h2>Shopay</h2>
      </div>
      <Products />
    </div>
  );
};

export default HomePage;
