import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";
import emptyCart from "../assets/empty.png";

export default function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart
    .reduce((total, item) =>
      total + item.price * item.quantity, 0
    )
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart is Empty </h1>
        <img src={emptyCart} alt="Empty Box" />
        <p>Add some products from the shop.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <h1>Your Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="cart-item">

          <img
            src={item.image}
            alt={item.title}
            className="cart-image"
          />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>
      ))}

      <h2 className="cart-total">
        Total: ${totalPrice}
      </h2>

    </div>
  );
}