import axios, { AxiosResponse } from "axios";
import { ProductInterface } from "../types/ProductInterface";

interface ApiProductResponse {
  products: ProductInterface[];
}
// Get products api
export const fetchProductsData = async () => {
  try {
    const apiUrl: string = "https://dummyjson.com/products";
    const response: AxiosResponse<ApiProductResponse> = await axios.get(apiUrl);

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
