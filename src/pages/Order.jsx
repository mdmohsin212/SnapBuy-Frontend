import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import ProfileNav from "./Profile_nav";
import { FaBoxOpen, FaStar, FaInfoCircle } from "react-icons/fa";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snapbuy-backend.onrender.com/payment/orderitem/?user_id=${user_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [user_id]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
        <div className="order-1 d-flex justify-content-center align-items-center text-center bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 pb-5">
          <div className="w-100 w-md-75 m-auto p-3">
            <h1 className="text-center mb-4">Order History</h1>
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : products.length === 0 ? (
              <p className="text-center text-muted fs-5">
                <FaBoxOpen className="me-2" />
                No orders found.
              </p>
            ) : (
              <div className="row g-4">
                {products.map((product, index) => (
                  <div key={index} className="col-12 col-md-10 mt-3 m-auto">
                    <div className="card shadow-sm h-100">
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-truncate">
                          {product.product_title}
                        </h5>
                        <p className="text-muted mb-2">
                          Quantity: {product.quantity}
                        </p>
                        <p className="text-muted">
                          Date:{" "}
                          {new Date(product.buying_time).toLocaleDateString()}
                        </p>

                        <div className="mt-auto d-flex justify-content-between align-items-center">
                          <span
                            className={`badge px-3 py-2 ${
                              product.status === "COMPLETE"
                                ? "bg-success"
                                : product.status === "FAILED"
                                ? "bg-danger"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {product.status}
                          </span>

                          <div className="d-flex gap-2">
                            <NavLink
                              className="btn btn-light btn-sm"
                              to={`/order_deatils/${product.id}`}
                            >
                              <FaInfoCircle className="me-1" />
                              Details
                            </NavLink>
                            <NavLink
                              className="btn btn-dark btn-sm"
                              to={`/reviews/${product.product}`}
                            >
                              <FaStar className="me-1" />
                              Review
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
