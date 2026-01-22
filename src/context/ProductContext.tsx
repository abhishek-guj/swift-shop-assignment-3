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
  const BASE_URL = "https://dummyjson.com/products";

  const getUrl = () => {
    if (search.trim()) {
      return `${BASE_URL}/search?q=${search.trim()}`;
    }

    if (selectedCategory === "All") {
      return BASE_URL;
    }

    return `${BASE_URL}/category/${selectedCategory}`;
  };

  const { data: categoriesData } = useFetch<ApiResponse>(
    "https://dummyjson.com/products/category-list",
  );

  // products
  const { loading, data, error } = useFetch<ApiResponse>(getUrl());

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
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
