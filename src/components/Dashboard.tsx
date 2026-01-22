import React, { useEffect } from "react";
import type { IFormInput } from "./data";
import useProduct from "../hooks/useProduct";

const Dashboard = () => {
  // const { totalProducts, lowStock, sellTotal, buyTotal } = props;

  const { products } = useProduct();

  console.log(products);
  const totalProducts = products.reduce((a, prod) => (a = a + prod.stock), 0);
  const lowStock = products?.filter((pro) => pro.stock < 10);
  const buyTotal = products
    ?.reduce((a, pro) => (a = a + pro.price * pro.stock), 0)
    .toFixed(2);

  return (
    <section className="p-4 w-full flex justify-evenly border-b">
      {/* total count */}
      <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center">
        <div>Total Products</div>
        <div className=" rounded-md font-bold">{totalProducts}</div>
      </div>
      {/* list of low stock */}
      <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center">
        <div>Low Stock</div>
        <div className="flex flex-col gap-0 border bg-white">
          {lowStock.map((p, idx) => {
            return (
              <div key={idx} className=" rounded-md">
                {p.title} | {p.stock}
              </div>
            );
          })}
        </div>
      </div>
      {/* total value */}
      <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center">
        <div>Total Inventory Value</div>
        <div className=" rounded-md font-bold">Rs. {buyTotal}</div>
      </div>
    </section>
  );
};

export default Dashboard;
