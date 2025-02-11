import React, { useContext } from "react";
import Footer from "./Footer";
import ProfileNav from "./Profile_nav";
import { ProductContext } from "./../context/ProductContext";
import { FaBoxOpen, FaTruck } from "react-icons/fa";

const CompleteOrder = () => {
  const { CompleteOrder, OrderCompleteloading } = useContext(ProductContext);

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-center bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 pb-5">
          <div className="w-100 w-md-75 m-auto">
            <h1 className="text-center mb-4">Complete History</h1>
            {OrderCompleteloading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : CompleteOrder.length === 0 ? (
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
                      <th scope="col">
                        Quantity
                      </th>
                      <th scope="col">Shipping</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CompleteOrder.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product_name}</td>
                        <td>
                          {item.quantity}
                        </td>
                        <td>
                          <span
                            className={`badge px-3 py-2 ${
                              item.Shipping_status === "Complete"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {item.Shipping_status}
                          </span>
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

export default CompleteOrder;
