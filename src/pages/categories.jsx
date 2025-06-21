import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../data/products';
import { useCart } from "../context/cartcontext";
 
const Categories = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const { category } = useParams();

  const filteredProducts = allProducts.filter(
  (item) =>
    item.category &&
    item.category.toLowerCase() === category.toLowerCase()
);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textTransform: 'capitalize' }}>{category} Collection</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                width: '200px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                backgroundColor: '#fffaf3',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{borderRadius:'10p',height: '220px',objectFit: 'cover',width: '100% '}} />
              <h4 style={{ margin: "0.8rem 0 0.4rem", fontSize: "1.05rem",fontWeight: "600", color: "#333", }}>{product.name}</h4>
              <p style={{ color: "#b85c00",  fontSize: "1rem", fontWeight: "500", }}>{product.price}</p>
               <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
    <button
      style={{
       backgroundColor: "#d2691e",
        color: "white",
        padding: "0.4rem 0.8rem",
        borderRadius: "6px",
        fontWeight: "500",
        cursor: "pointer",
        fontSize: "0.9rem",
        border: "none",
      }}
      onClick={() => handleAddToCart(item)}
    >
      Add to Cart
    </button>
    <button
      style={{
        backgroundColor: "white",
        color: "#d2691e",
        padding: "0.4rem 0.8rem",
        borderRadius: "6px",
        fontWeight: "500",
        cursor: "pointer",
        fontSize: "0.9rem",
        border: "1px solid #d2691e",
      }}
      onClick={() => console.log('Buy Now', item)}
    >
      Buy Now
    </button>
  </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
        
      </div>
      
    </div>
  );
};

export default Categories;
