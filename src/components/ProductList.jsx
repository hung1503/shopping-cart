import React, { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category?.name}</p>
          </div>
        );
      })}
    </div>
  );
};
