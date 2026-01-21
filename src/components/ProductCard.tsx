import React, { useEffect, type ReactComponentElement } from "react";
import type { IFormInput } from "./data";
import useFetch from "../hooks/useFetch";
import useProduct from "../hooks/useProduct";

type Props = {
  productData: IFormInput;
  updateForm: Function;
};

const imagePaths = {
  Electronics: "gadgets.png",
  Appliances: "home-appliance.png",
  KitchenWare: "kitchen.png",
};

const ProductCard = ({ productData, updateForm }: Props) => {
  // ??? do prop destructuring
  const handleClick = (e) => {
    updateForm(productData);
  };

  const handleAddToCart=()=>{
    console.log("handle add to cart")
  }

  return (
    <div className="rounded-md border p-4 w-48 text-sm justify-start">
      <div className="truncate dark:text-red-600">{productData.title}</div>
      <div className="flex justify-between items-center">
        <div>{productData.category}</div>
        <div className="text-xs items-center">Rs. {productData.price}</div>
      </div>
      <div className="">{productData.stock}</div>
      <div onClick={handleAddToCart} className="rounded-none text-white bg-black p-1">Add to Cart</div>
      <div onClick={handleClick} className="rounded-none text-white bg-gray-700 p-1 mt-2">Update</div>
    </div>
  );
};

export default ProductCard;
