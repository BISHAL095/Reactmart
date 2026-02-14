import { render, screen } from "@testing-library/react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";

test("adds product to cart when button clicked", async () => {

  const addToCart = vi.fn();

  const product = {
    id: 1,
    title: "Test Product",
    price: 20,
    image: ""
  };

  const user = userEvent.setup();

  render(
    <CartContext.Provider value={{ addToCart }}>
      <ProductCard product={product} />
    </CartContext.Provider>
  );

  await user.click(screen.getByText(/add to cart/i));

  expect(addToCart).toHaveBeenCalled();
});