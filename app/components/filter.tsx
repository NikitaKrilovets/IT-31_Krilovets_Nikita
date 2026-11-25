"use client";

import { useState } from "react";

export default function Filter({ products }: any) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Пошук товарів..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product: any) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <p className="price">{product.price} $</p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>Товарів не знайдено</p>
      )}
    </div>
  );
}