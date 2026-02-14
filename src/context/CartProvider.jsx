import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // for add to cart
  function addToCart(product, quantity = 1) {

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        { ...product, quantity }
      ];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  // for increase in qty
  function increaseQty(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // for decrease in qty
  function decreaseQty(id) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  // for navbar counter
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}