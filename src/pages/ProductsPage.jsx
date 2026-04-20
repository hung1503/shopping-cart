import React, { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="relative m-8 pb-25 flex flex-col items-center">
      <h2 className="text-3xl font-bold m-4">Products List</h2>
      <div className="relative grid grid-cols-5 gap-4 mx-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col m-2 p-2 w-60 h-100 rounded hover:shadow-lg transition-shadow duration-300 group "
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-45 h-45 bg-cover bg-center bg-no-repeat"
                />
              </div>
              <div className="flex flex-col items-start m-4">
                <p className="font-normal text-lg">{product.title}</p>
                <p className="font-bold">${product.price}</p>
                <p className="text-xs">{product.category?.name}</p>
              </div>
              <div className="flex justify-center items-center m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="rounded p-2 bg-red-500 text-white hover:bg-red-900 cursor-pointer transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={20}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
