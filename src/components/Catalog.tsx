import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import type { IFormInput } from "./data";
import useProduct from "../hooks/useProduct";

type Props = {
  setProductsData: Function;
  productsData: IFormInput[];
};

const Catalog = (props: Props) => {
  const { setProductsData } = props;
  const { products, categories, setSelectedCategory,test } = useProduct();

  // if this removed instant changes are not reflected
  // reason: productsData is different and dilterlist is different and as filterlist is used to render i added this useedffect here

  const handleSearch = (e) => {
    const fList = products.filter((pro) =>
      pro.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    // setFilterList(fList);
  };

  const handleFilter = (e) => {
    test()
    setSelectedCategory(e.target.value);
  };

  const handleProductClick = (a) => {
    setSelectedData(a);
  };

  const [selectedData, setSelectedData] = useState<IFormInput>();

  // if (proLoading )
  //   return <div className="flex p-4">Loading...</div>;
  // if (proError)
  //   return (
  //     <div className="flex p-4">There is an Error while loading products.</div>
  //   );

  return (
    <>
      <div className="flex p-4">
        {/* products */}

        <div className="w-3/6 flex flex-col">
          <div className="flex pb-4">
            {/* <input placeholder="Search" onChange={handleSearch} /> */}
            <select
              onChange={handleFilter}
              className="border border-gray-400 w-full p-1"
            >
              <option value="All">All</option>
              {categories?.map((cat, idx) => {
                return (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-wrap h-fit justify-center gap-2">
            {products &&
              products?.map((prod) => {
                return (
                  <ProductCard
                    key={prod.id}
                    updateForm={handleProductClick}
                    productData={prod}
                  />
                );
              })}
          </div>
        </div>
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
