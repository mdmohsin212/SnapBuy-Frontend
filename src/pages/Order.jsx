import React, { useContext } from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import ProfileNav from "./Profile_nav";
import { FaBoxOpen, FaStar, FaInfoCircle } from "react-icons/fa";
import { ProductContext } from './../context/ProductContext';

const Order = () => {
  const {products, Productloading} = useContext(ProductContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
        <div className="order-1 d-flex justify-content-center align-items-center text-center bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 pb-5">
          <div className="w-100 w-md-75 m-auto">
            <h1 className="text-center mb-4">Order History</h1>
            {Productloading ? (
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
              <div className="table-responsive border">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col" className="d-none d-md-table-cell">
                        Status
                      </th>
                      <th scope="col">Shipping Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product_name}</td>
                        <td>{item.quantity}</td>
                        <td className="d-none d-md-table-cell">
                          <span
                            className={`badge px-3 py-2 ${
                              item.status === "COMPLETE"
                                ? "bg-success"
                                : item.status === "FAILED"
                                ? "bg-danger"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>
                          {" "}
                          <span
                            className={`badge px-3 py-2 ${
                              item.Shipping_status === "Complete"
                                ? "bg-success"
                                : "bg-secondary text-white"
                            }`}
                          >
                            {item.Shipping_status}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex flex-wrap gap-2">
                            <NavLink
                              className="btn btn-light btn-sm"
                              to={`/order_deatils/${item.id}`}
                            >
                              <FaInfoCircle className="me-1" />
                              Details
                            </NavLink>
                            <NavLink
                              className="btn btn-dark btn-sm"
                              to={`/reviews/${item.product}`}
                            >
                              <FaStar className="me-1" />
                              Review
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
