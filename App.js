import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Prayer from './components/Prayer';
import Products from './pages/Products';
import Login from './pages/Login';
import About from './pages/About';
import CartModal from './components/CartModal';
import ProductPopup from './components/ProductPopup'; 
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal } from 'bootstrap'; 

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const modalInstance = useRef(null);

 
  useEffect(() => {
    const modalElement = document.getElementById('productPopup');
    if (modalElement) {
      modalInstance.current = new Modal(modalElement);
    }

        return () => {
      if (modalInstance.current) {
        modalInstance.current.dispose();
      }
    };
  }, []);

  
  const openProductView = (product) => {
    setSelectedProduct(product);
    if (modalInstance.current) {
      modalInstance.current.show();
    }
  };


  const addToCart = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(item => item.name === product.name);
      if (exists) {
        return prev.map(item => item.name === product.name 
          ? { ...item, quantity: item.quantity + parseInt(quantity) } : item);
      }
      return [...prev, { ...product, quantity: parseInt(quantity) }];
    });

 
    if (modalInstance.current) {
      modalInstance.current.hide();
    }
  };


  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartCount} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products openProductView={openProductView} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prayer" element={<Prayer />} />
        </Routes>

      
        <ProductPopup 
          product={selectedProduct} 
          addToCart={addToCart} 
        />

        <CartModal 
          cart={cart} 
          removeFromCart={removeFromCart} 
        />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;