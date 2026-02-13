export async function fetchProducts(limit = 20) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();

  } catch (error) {
    console.error(error);
    return [];
  }
}