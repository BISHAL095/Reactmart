import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/productCard.css";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const [qty, setQty] = useState(1);

  function handleInput(e) {
    const value = Number(e.target.value);

    if (value >= 1) {
      setQty(value);
    }
  }

  function handleAdd() {
    addToCart(product, qty);
    setQty(1); // reset after add
  }

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
        width="120"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <input
        type="number"
        min="1"
        value={qty}
        onChange={handleInput}
        className="qty-input"
      />

      <button onClick={handleAdd}>
        Add to Cart
      </button>

    </div>
  );
}