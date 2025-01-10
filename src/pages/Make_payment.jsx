import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { payment } from "../components/payment";

const MakePayment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(
      `https://snapbuy-backend.onrender.com/product/cart/?user_id=${user_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [user_id]);

  let total = 0;
  let shipping = 50.0;
  let totalItems = 0;

  cartItems.forEach((item) => {
    total += item.product_price * item.quantity;
    totalItems += item.quantity;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <div className="card mb-4 w-50">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0 text-center">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalItems})
                    <span>
                      <span className="fs-4">৳ </span>
                      {total.toFixed(2)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>
                      <span className="fs-4">৳ </span>
                      {shipping}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>
                        <span className="fs-4">৳ </span>
                        {(total + shipping).toFixed(2)}
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success m-2" onClick={payment}>
                Make Payment
              </button>
              <Link to="/product" className="btn btn-outline-dark m-2">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MakePayment;
