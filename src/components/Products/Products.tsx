import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import DialogBox from "../DialogBox/DialogBox";
import { ProductInterface } from "../../types/ProductInterface";
import { fetchProductsData } from "../../services/apiService";

import "./Products.css";
import ProductInfo, { IProductInfo } from "../ProductInfo/ProudctInfo";
import Pagination from "../Pagination/Pagination";

// Initial state of product info
const IProductInfoState = {
  thumbnail: "",
  title: "",
  price: 0,
} as IProductInfo;

const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<ProductInterface[]>([]);
  const [basketOfProducts, setBasketOfProducts] = useState<ProductInterface[]>(
    []
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productInfo, setProductInfo] =
    useState<IProductInfo>(IProductInfoState);

  // Product pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // items per pages
  const indexOfLastItem = currentPage * itemsPerPage; // get the index of last item
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // get the first item
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem); // items to display in page

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // set new page
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const results = await fetchProductsData(); // get product api call
      setProductList(results.data.products); // access the data products property
      console.log(basketOfProducts);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error", error);
    }
  };

  const addToBasket = (item: ProductInterface) => {
    let tempBasketOfProducts = basketOfProducts; // clone the value of basket products
    basketOfProducts.push(item); // push new product in basket
    setBasketOfProducts(tempBasketOfProducts); // set the new value of product basket

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="product-grid-container">
        {isLoading && <div>Loading...</div>}
        {!isLoading && productList.length > 0 ? (
          <React.Fragment>
            {/* Pagination */}
            <Pagination
              data={productList}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
            {currentItems.map((product, idx) => (
              <div className="product-grid-item" key={idx}>
                <ProductCard product={product} addToBasket={addToBasket} />
              </div>
            ))}
          </React.Fragment>
        ) : (
          <div className="not-available">No products avaialble.</div>
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
