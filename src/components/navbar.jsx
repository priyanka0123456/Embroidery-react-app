import React from 'react';
import { Link } from "react-router-dom";
 
const categories = [
  'Kurta',
  'T-Shirt',
  'Jeans',
  'Shirt',
  'Bags',
  'Skirt',
  'Dupatta',
  'Saree',
  'Lehenga',
  'Accessories',
  'Lugda',
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img
          src="/images/embroidery.jpg" 
          alt="Logo"
          style={{ height: '40px', borderRadius: '6px'}}
        />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
          Sangeeta Embroidery
        </span>
      </div>

     
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search products..."
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '10px',
            border: 'none',
            outline: 'none',
            width: '400px',
            maxWidth: '90%',
          }}
        />
        <button style={{background:'none', color:'white', border:'none', cursor:'pointer',fontSize:'15px'}}
        >search</button>
      </div>
      <Link to="/" className="nav-item">Home</Link>

      <div className="nav-item categories-container">
        <span className="nav-link">Categories</span>
        <div className="categories-dropdown">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/category/${cat.toLowerCase()}`}
              className="category-box"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/about" className="nav-item">About</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/cart" className="nav-item">Cart</Link>
    </nav>
  );
};

export default Navbar;
