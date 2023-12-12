import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductInterface } from "../../types/ProductInterface";
import { fetchProductsData } from "../../services/apiService";

const Products = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<ProductInterface[]>([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const results = await fetchProductsData(); // get product api call
      setProductList(results.data.products); // access the data products property
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {isLoading && <div>Loading...</div>}
      {!isLoading && productList.length > 0 && (
        <React.Fragment>
          {productList.map((product) => (
            <ProductCard {...product} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;
