import React from "react";
import { useCart } from "../context/cartcontext";
import "./pages.css"; 

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
           
          </div>
        </>
      )}
       <div className="cart-summary">
        <h3>Total: ₹{getTotal()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
