import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const product = products.find((item) => item.id === parseInt(id));
  const [loading, setLoading] = useState(true);
  if (!product) {
    return (
      <div>
        <h1 className="text-3xl font-bold m-4">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex justify-between">
      <div className="h-100 w-100">
        <img
          src={product.images[0]}
          alt={product.title}
          className="bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold m-4">{product.title}</h1>
        <p className="text-lg m-4">{product.description}</p>
        <p className="text-xl font-bold m-4">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
