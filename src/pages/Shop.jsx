import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(20).then(setProducts);
  }, []);

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