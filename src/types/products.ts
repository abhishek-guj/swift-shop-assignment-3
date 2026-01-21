import { Category } from "./../components/data";
import type { Dispatch, SetStateAction } from "react";

export interface IProduct {
  // Display title, price, category (you can display additional fields from response)
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
}

export type ProductContextType = {
  products: IProduct[];
  //   getProducts: ()=>IProduct[]
  categories: string[];
  loading: Boolean;
  error: Boolean;
};

// https://www.xjavascript.com/blog/mapper-typescript/
export const apiToProductMapper = (apiData): IProduct => {
  return {
    id: apiData.id,
    title: apiData.title,
    category: apiData.category,
    price: apiData.price,
    stock: apiData.stock,
  };
};
