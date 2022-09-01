import { createContext, useContext, useState } from "react";
import Products from "../products";

const ProductContext = createContext(null);

export const useProducts = () => useContext(ProductContext);

export const FilterProvider = ({ children }) => {
  const [productList, setProductList] = useState(Products.products);
  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
