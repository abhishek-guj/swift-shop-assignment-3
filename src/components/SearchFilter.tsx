import React from "react";
import useProduct from "../hooks/useProduct";

const SearchFilter = () => {
  const { categories, setSelectedCategory, setSearch } = useProduct();
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex pb-4">
      <input placeholder="Search" onChange={handleSearch} />
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
  );
};

export default SearchFilter;
