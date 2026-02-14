import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartProvider } from "../context/CartProvider";
import userEvent from "@testing-library/user-event";

/* Test component to access context */
function TestComponent() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const product = {
    id: 1,
    title: "Test Product",
    price: 100
  };

  return (
    <div>
      <button onClick={() => addToCart(product, 1)}>
        Add
      </button>

      <button onClick={() => removeFromCart(1)}>
        Remove
      </button>

      <p>Items: {cart.length}</p>
    </div>
  );
}

describe("CartContext", () => {

  test("adds item to cart", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await user.click(screen.getByText("Add"));

    expect(screen.getByText("Items: 1")).toBeInTheDocument();
  });

  test("removes item from cart", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await user.click(screen.getByText("Add"));
    await user.click(screen.getByText("Remove"));

    expect(screen.getByText("Items: 0")).toBeInTheDocument();
  });

});