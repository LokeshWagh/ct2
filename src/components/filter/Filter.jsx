import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import Loader from "../../components/loader/Loader.jsx";
import { FaSearch } from 'react-icons/fa'; // Icon for search

function Filter() {
  const context = useContext(myContext);
  const {
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (product.length > 0) {
      setLoading(false);
      setCategories([...new Set(product.map((item) => item.category))]);
      setPrices([...new Set(product.map((item) => item.price))]);
    }
  }, [product]);

  const resetFilters = () => {
    setSearchkey("");
    setFilterType("");
    setFilterPrice("");
  };

  return (
    <div>
      <div className="container mx-auto px-4 mt-5 overflow-hidden">
        <div className="p-5 rounded-lg bg-black drop-shadow-xl border border-gray-200 text-white shadow-[0_0_15px_rgba(255,165,0,0.3)] min-h-10 overflow-hidden">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="relative">
                <div className="absolute flex items-center ml-2 h-full text-gray-400">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  name="searchkey"
                  value={searchkey}
                  onChange={(e) => setSearchkey(e.target.value)}
                  id="searchkey"
                  placeholder="Search here"
                  className="px-8 py-3 w-full rounded-md bg-gray-900 outline-none text-white placeholder-gray-400 border-2 border-transparent  shadow-md"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="font-medium text-white">Filters</p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-sm font-medium rounded-md  shadow-md"
                >
                  Reset Filter
                </button>
              </div>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-3 w-full rounded-md bg-gray-900 text-white border-2 border-transparent outline-none shadow-md"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="px-4 py-3 w-full rounded-md bg-gray-900 text-white border-2 border-transparent outline-none  shadow-md"
                  >
                    <option value="">All Prices</option>
                    {prices.map((price, index) => (
                      <option key={index} value={price}>
                        {price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
