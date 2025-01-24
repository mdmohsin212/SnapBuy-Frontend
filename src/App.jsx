import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from "./pages/Contact";
import Login from './pages/Login';
import SignUp from "./pages/Signup";
import Product from './pages/Product';
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/product_deatils";
import Checkout from "./pages/Checkout";
import MakePayment from './pages/Make_payment';
import Order from './components/Order'; 
import ChangePassword from './components/Change_password';
import Reviews from './components/Reviews';
import OrderDeatils from "./components/Order_deatils";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product_details/:id" element={<ProductInfo />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/order_deatils/:id" element={<OrderDeatils />} />
        <Route path="/make_payment" element={<MakePayment />} />
        <Route path="/change_password" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

export default App;
