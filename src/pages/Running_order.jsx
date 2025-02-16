import React, { useContext, useState } from "react";
import Footer from "./Footer";
import ProfileNav from "./Profile_nav";
import { FaBoxOpen, FaTruck } from "react-icons/fa";
import { ProductContext } from "./../context/ProductContext";

const RunningOrder = () => {
  const { OrderAllProduct, Orderloading } = useContext(ProductContext);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [shippingStatus, setStatus] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSaveChanges = () => {
    if (!selectedOrder) return;

    fetch(
      `https://snap-buy-backend.vercel.app/payment/orderitem/${selectedOrder.id}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Shipping_status: shippingStatus }),
      }
    )
      .then((response) => response.json())
      .then(() => {
        alert("Shipping status updated successfully!");
        window.location.reload();
      })
      .catch(() => {
        alert("Failed to update status.");
      });
  };

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
            <h1 className="text-center mb-4">Order History</h1>
            {Orderloading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : OrderAllProduct.length === 0 ? (
              <p className="text-center text-muted fs-5">
                <FaBoxOpen className="me-2" />
                No orders found.
              </p>
            ) : (
              <div className="table-responsive border">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Product</th>
                      <th scope="col" className="d-none d-md-table-cell">
                        Quantity
                      </th>
                      <th scope="col">Shipping</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OrderAllProduct.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.product_name}</td>
                        <td className="d-none d-md-table-cell">
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
                        <td>
                          {item.Shipping_status === "Pending" ? (
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setSelectedOrder(item)}
                            >
                              <FaTruck className="me-2" />
                              Shipment
                            </button>
                          ) : (
                            <p className="btn bg-success btn-sm disabled">
                              Order Complete
                            </p>
                          )}
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Shipping Status
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pb-4">
              {selectedOrder && (
                <div>
                  <p className="mb-2">
                    Buyer Name : <strong>{selectedOrder.buyer_name}</strong>
                  </p>
                  <p className="mb-2">
                    Buyer Email : <strong>{selectedOrder.email}</strong>
                  </p>
                  <p className="mb-2">
                    Shipping Address : <strong>{selectedOrder.address}</strong>
                  </p>
                  <p className="mb-2">
                    Buying Time:{" "}
                    <strong>
                      {new Date(selectedOrder.buying_time).toLocaleString()}
                    </strong>
                  </p>
                  <p className="mb-2">
                    Product Name : <strong>{selectedOrder.product_name}</strong>
                  </p>
                </div>
              )}
              <p className="form-label fw-bold mb-2">Shipping Status</p>
              <select className="form-select" onChange={handleStatusChange}>
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveChanges}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RunningOrder;
