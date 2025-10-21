import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './E_commerce_parts/Header';
import Home from './E_commerce_parts/Home';
import Products from './E_commerce_parts/Products';
import About from './E_commerce_parts/About';
import Contacts from './E_commerce_parts/Contacts';
import Login from './E_commerce_parts/Login';
import Register from './E_commerce_parts/Register';
import Carts from './E_commerce_parts/Carts';

function E_commerce() {
  return (
    <div className="E_commerce">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/carts" element={<Carts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default E_commerce;
