import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ProductContext } from "../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cartItems, cartLoading, setCartItems } = useContext(ProductContext);

  const updateItem = (item, value) => {
    const newQuantity = item.quantity + value;
    if (newQuantity > 0) {
      const newItem = { ...item, quantity: newQuantity };
      fetch(`https://snap-buy-backend.vercel.app/product/cart/${item.id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      })
        .then((res) => {
          setCartItems((items) =>
            items.map((i) => (i.id === item.id ? newItem : i))
          );
        })
        .catch((error) => console.error(error));
    } else {
      fetch(`https://snap-buy-backend.vercel.app/product/cart/${item.id}/`, {
        method: "DELETE",
      })
        .then(() => {
          setCartItems((items) => items.filter((i) => i.id !== item.id));
        })
        .catch((error) => console.error(error));
    }
  };

  const addItem = (item) => updateItem(item, 1);
  const removeItem = (item) => updateItem(item, -1);

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    let total = 0;
    let shipping = 50.0;
    let totalItems = 0;

    cartItems.forEach((item) => {
      total += item.product_price * item.quantity;
      totalItems += item.quantity;
    });

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <img
                            src={item.product_img}
                            width={100}
                            height={75}
                            alt="Product"
                          />
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <p>
                            <strong>{item.product_title}</strong>
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn px-3"
                              onClick={() => removeItem(item)}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <p className="mx-5">{item.quantity}</p>
                            <button
                              className="btn px-3"
                              onClick={() => addItem(item)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>
                              <span className="text-muted">
                                {item.quantity}
                              </span>{" "}
                              x <span className="fs-4">৳</span>{" "}
                              {item.product_price}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems}){" "}
                      <span>
                        <span className="fs-4">৳</span> {Math.round(total)}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping{" "}
                      <span>
                        <span className="fs-4">৳</span> {shipping}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <strong>Total amount</strong>
                      <strong>
                        <span className="fs-4">৳</span>{" "}
                        {Math.round(total + shipping)}
                      </strong>
                    </li>
                  </ul>
                  <Link
                    to="/checkout"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        {cartLoading ? (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : cartItems.length > 0 ? (
          <ShowCart />
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
