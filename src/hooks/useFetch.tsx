import React, { useEffect, useState } from "react";
import type { FetchFunction, FetchResult } from "vite";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  const [data, setData] = useState(null);

  // ref: https://dev.to/debajit13/implement-the-usefetch-custom-hook-in-react-50p3
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        // const res = await fetch(url, {...payload})
        const response = await fetch(url);
        const result = await response.json();
        console.log("usefetch:", result);
        setData(result);
      } catch (err) {
        console.error("error in fetch:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, data, error };
};
export default useFetch;
