import React, { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
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
            <div key={product.id} className="flex flex-col p-2 border rounded ">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-50% h-50% object-cover"
              />
              <p>{product.title}</p>
              <p className="font-bold">${product.price}</p>
              <p className="text-xs">{product.category?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
