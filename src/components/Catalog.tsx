import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import type { IFormInput } from "./data";
import useProduct from "../hooks/useProduct";
import { ProductList } from "./ProductList";
import Products from "./Products";

type Props = {
  setProductsData: Function;
  productsData: IFormInput[];
};

const Catalog = (props: Props) => {
  const { setProductsData } = props;
  const {
    products,
    categories,
    setSelectedCategory,
    test,
    setSearch,
    loading,
    error,
  } = useProduct();

  // if this removed instant changes are not reflected
  // reason: productsData is different and dilterlist is different and as filterlist is used to render i added this useedffect here

  const [selectedData, setSelectedData] = useState<IFormInput>();

  return (
    <>
      <div className="flex p-4">
        {/* products */}
        <Products />
       
        {/* form */}
        {
          <div className="flex-1 border-l flex flex-col items-center ml-4 px-4">
            <div className="sticky top-14 w-full">
              <ProductForm
                selectedData={selectedData}
                setSelectedData={setSelectedData}
                setProductsData={setProductsData}
                productsData={products}
              />
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Catalog;
