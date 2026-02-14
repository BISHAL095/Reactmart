import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

export default function Shop() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function loadProducts() {
      try {
        const data = await fetchProducts(20);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();

  }, []);

  /* ⭐ Loading spinner */
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  /* ⭐ Error state */
  if (error) {
    return (
      <div className="shop-container">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="shop-container">

      <h1 className="shop-title">Shop</h1>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}