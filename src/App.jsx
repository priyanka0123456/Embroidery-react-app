import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import { CartProvider } from "./context/cartcontext.jsx";
import CategoryPage from './pages/categories.jsx';
import Products from "./pages/products.jsx";  
export default function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
          <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Products />} />  
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}
