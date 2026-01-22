import React from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import SearchFilter from "./SearchFilter";

export const ProductList = () => {
  const { products, loading, error } = useProduct();

  const handleProductClick = (a) => {
    setSelectedData(a);
  };

  if (loading) return <div className="flex p-4">Loading...</div>;
  if (error)
    return (
      <div className="flex p-4">There is an Error while loading products.</div>
    );

  return (
    <div className="flex flex-wrap h-fit justify-center gap-2">
      {products && products.length > 0 ? (
        products?.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              updateForm={handleProductClick}
              productData={prod}
            />
          );
        })
      ) : (
        <div>No products to list.</div>
      )}
    </div>
  );
};
