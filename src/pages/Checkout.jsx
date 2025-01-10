import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { HandalCheckout } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

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

const handlPayment = (event) => {
  event.preventDefault();
  const cartItemIds = cartItems.map((item) => item.id);
  HandalCheckout(event, total, cartItemIds);
  navigate("/make_payment");
};

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${total.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping<span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${(total + shipping).toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3">
                      <div className="col-sm-12 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Name"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your email"
                          required
                        />
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Address"
                          required
                        />
                      </div>
                      <div className="col-md-12 my-1">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder="zip code"
                          required
                        />
                      </div>
                    </div>
                    <hr className="my-4" />
                    <button
                      type="button"
                      className="w-100 btn btn-primary"
                      onClick={handlPayment}
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
