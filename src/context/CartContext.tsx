import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ProductContextType } from "../types/products";
import useFetch from "../hooks/useFetch";

export const ProductContext = React.createContext<ProductContextType | null>(
  null,
);

// https://blog.logrocket.com/how-to-use-react-context-typescript/
const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // setting context values
  const [products, setProducts] = useState(null);

  const [categories, setCategories] = useState<string[] | null>(null);

  // setting context values theme and function

  return (
    <ProductContext.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
