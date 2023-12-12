import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import DialogBox from "../DialogBox/DialogBox";
import { ProductInterface } from "../../types/ProductInterface";
import { fetchProductsData } from "../../services/apiService";

import "./Products.css";
import ProductInfo, { IProductInfo } from "../ProductInfo/ProudctInfo";

// Initial state of product info
const IProductInfoState = {
  thumbnail: "",
  title: "",
  price: 0,
} as IProductInfo;

const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<ProductInterface[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productInfo, setProductInfo] =
    useState<IProductInfo>(IProductInfoState);

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

  const addToBasket = (item: ProductInterface) => {
    const productDetails = {
      thumbnail: item.thumbnail,
      title: item.title,
      price: item.price,
    } as IProductInfo;
    setProductInfo(productDetails); // set product information to display in dialog box
    setIsOpen(true); // show dialog box
  };

  const onCloseDialog = () => setIsOpen(false); // close the dialog box

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <div className="product-grid-container">
        {isLoading && <div>Loading...</div>}
        {!isLoading && productList.length > 0 && (
          <React.Fragment>
            {productList.map((product, idx) => (
              <div className="product-grid-item" key={idx}>
                <ProductCard product={product} addToBasket={addToBasket} />
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
      {/* Add to basket dialog box */}
      {isOpen && (
        <DialogBox onClose={onCloseDialog}>
          {/* Display product information in dialog box */}
          <ProductInfo
            thumbnail={productInfo.thumbnail}
            title={productInfo.title}
            price={productInfo.price}
          />
        </DialogBox>
      )}
    </React.Fragment>
  );
};

export default Products;
