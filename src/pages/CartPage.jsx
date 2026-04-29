import React, { useState } from "react";

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="flex flex-row justify-between p-10 gap-4">
      <div>
        <h1>In your cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              <div>
                <h3>{item.name}</h3>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-50 h-50 bg-cover bg-center bg-no-repeat"
                />
              </div>
              <div>
                <p>Quantity</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <h1>Your total order</h1>
      </div>
    </div>
  );
};
