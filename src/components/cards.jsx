import React from "react";
import { useCart } from "../context/cartcontext.jsx";
import products from '../data/products.js';
import { useNavigate } from "react-router-dom";


const handleBuyNow = (product) => {
  addToCart(product); // Ensure it's in cart
  navigate("/cart"); // Go to cart
};

const Cards = () => {
const navigate = useNavigate();

  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
 console.log("Cart:", cart); 

  const handleAddToCart = (product) => {
    addToCart(product);
    
    };
   
  return (
     <div className="cards">
      <h2>Featured Products</h2>
      <div className="card-list">
        {products.map((item) => {
          const inCart = cart.find((cartItem) => cartItem.id === item.id);
          const quantity = inCart ? inCart.quantity : 0;

          return (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <p className="rating">⭐⭐⭐⭐⭐</p>

              {!inCart ? (
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
                
              )}
           

           
            </div>
        
          );
        })}
      </div>
      

    </div>
  );
};

export default Cards;
