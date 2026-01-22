import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./layout";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Catalog from "./components/Catalog";
import { DummyData, type IFormInput } from "./components/data";
import useFetch from "./hooks/useFetch";
import useProduct from "./hooks/useProduct";

// import {Layout} from "./"

function App() {
  const [productsData, setProductsData] = useState<IFormInput[]>(() => {
    const data = localStorage.getItem("list");
    return data ? JSON.parse(data) : DummyData;
  });

  useEffect(() => {
    // https://www.geeksforgeeks.org/reactjs/managing-local-storage-session-storage-using-react-hooks/
    localStorage.setItem("list", JSON.stringify(productsData));
    setProductsData(productsData);

    // ??? tmp
  }, [productsData]);

  return (
    <div className="mt-10 w-full">
      <Layout>
        <main className="flex flex-col px-4">
          {/* <Sidebar /> */}
          <Dashboard />
          <Catalog
            setProductsData={setProductsData}
            productsData={productsData}
          />
        </main>
      </Layout>
    </div>
  );
}

export default App;
