import React, { useState } from "react";
import  products  from "../data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filtered = products.filter(item => {
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchMin = minPrice === "" || item.price >= parseInt(minPrice);
    const matchMax = maxPrice === "" || item.price <= parseInt(maxPrice);
    return matchCategory && matchMin && matchMax;
  });

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <select
          onChange={e => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          style={{ padding: "0.5rem" }}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          style={{ padding: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          style={{ padding: "0.5rem" }}
        />
      </div>


      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filtered.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              width: "200px",
              backgroundColor: "#fff8f0"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3 style={{ fontSize: "1rem", margin: "0.5rem 0" }}>{item.name}</h3>
            <p style={{ margin: 0 }}>₹{item.price}</p>
            <button style={{ marginTop: "0.5rem" }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
