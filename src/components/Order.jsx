import React, { useEffect, useState } from "react";
import ProfileNav from "./../components/Profile_nav";
import Footer from "../pages/Footer";
import { NavLink } from "react-router-dom";

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
        console.log(data);
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
        <div className="col-12 col-md-2 order-1 d-flex justify-content-center align-items-center text-center bg-light py-3">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 pb-5">
          <div className="w-100 w-md-75 m-auto p-3">
            <h1 className="text-center">Order History</h1>
            <hr />

            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : products.length === 0 ? (
              <p className="text-center">No orders found.</p>
            ) : (
              products.map((product, index) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 border p-3 rounded shadow-sm"
                >
                  <div className="text-center text-md-start">
                    <h5 className="fw-bold">{product.product_title}</h5>
                    <p className="mb-1">Quantity: {product.quantity}</p>
                    <p className="mb-0">
                      Date: {new Date(product.buying_time).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="mt-3 mt-md-0 text-center">
                    <span
                      className={`badge fs-6 px-3 py-2 ${
                        product.status === "COMPLETE"
                          ? "bg-success"
                          : product.status === "FAILED"
                          ? "bg-danger"
                          : ""
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="d-flex flex-row flex-wrap justify-content-center mt-3 mt-md-0 gap-2">
                    <NavLink
                      className="btn btn-primary btn-sm"
                      to={`/order_deatils/${product.id}`}
                    >
                      Details
                    </NavLink>
                    <NavLink className="btn btn-secondary btn-sm">
                      Review
                    </NavLink>
                  </div>
                </div>
              ))
            )}
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
