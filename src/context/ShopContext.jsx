import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  clearCart: () => {},
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId),
    );
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
