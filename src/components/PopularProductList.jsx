import React, { useEffect, useState } from "react";

export const PopularProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold m-4">Products List</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-10">
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
                    className="w-50 h-50 bg-cover bg-center bg-no-repeat"
                  />
                </div>
                <div className="flex justify-between m-4">
                  <div>
                    <p className="font-normal text-lg">{product.title}</p>
                    <p className="text-xs">{product.category?.name}</p>
                  </div>
                  <p className="font-bold">${product.price}</p>
                </div>
                <div className="flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="rounded p-2 bg-red-500 text-white hover:bg-red-900 cursor-pointer transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
