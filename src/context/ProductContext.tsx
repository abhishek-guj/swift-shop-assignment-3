import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  apiToProductMapper,
  type IProduct,
  type ProductContextType,
} from "../types/products";
import useFetch from "../hooks/useFetch";

export const ProductContext = React.createContext<ProductContextType>({
  products: [],
  categories: [],
  loading: false,
  error: false,
});

// provider

type productApi = {
  id: number;
  title: string;
  price: number;
  category: string;
  stock: number;
};
interface ApiResponse {
  products: productApi[];
}

// https://blog.logrocket.com/how-to-use-react-context-typescript/
const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // setting context values
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("https://dummyjson.com/products");

  const { data: categoriesData } = useFetch<ApiResponse>(
    "https://dummyjson.com/products/category-list",
  );

  const test = () => {
    const { data: categoriesData } = useFetch<ApiResponse>(
      "https://dummyjson.com/products/category-list",
    );
  };

  // products

  const { loading, data, error } = useFetch<ApiResponse>(url);
  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }

    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [data, categoriesData]);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        error,
        setSelectedCategory,
        selectedCategory,
        test
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
