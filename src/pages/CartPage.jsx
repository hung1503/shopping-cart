import React, { useEffect, useState } from "react";

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      console.log(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const price = cart.reduce((total, item) => {
        total = total + item.product.price * item.quantity;
        return total;
      }, 0);
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);
  return (
    <div className="flex flex-row justify-between p-10 gap-4">
      <div>
        <h1>In your cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div className="flex flex-row justify-between gap-32" key={index}>
              <div>
                <h3>{item.product.title}</h3>
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="w-20 h-20 bg-cover bg-center bg-no-repeat"
                />
              </div>
              <div>
                <p>Quantity</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <h1>Your total order</h1>
        <p>Total price: {totalPrice}</p>
      </div>
    </div>
  );
};
