import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Footer from "./Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const OrderDetails = () => {
  const id = useParams().id;
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://snapbuy-backend.onrender.com/payment/orderitem/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, [id]);

  // convert jsx to pdf
  const handleGeneratePDF = () => {
    const input = document.getElementById("order-details-container");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Order_${info.id}.pdf`);
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          id="order-details-container"
          className="container w-100 w-md-75 my-5 mx-auto px-4 py-4 bg-white shadow-sm rounded"
        >
          <h1 className="text-center mb-4 text-dark fw-bold">Order Details</h1>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-5">
            <div>
              <h2 className="h5 mb-3">Order Summary</h2>
              <p className="mb-1">
                <strong>Order ID:</strong> {info.id}
              </p>
              <p className="mb-1">
                <strong>Transaction ID:</strong> {info.tran_id}
              </p>
              <p className="mb-1">
                <strong>Order Date:</strong>{" "}
                {new Date(info.buying_time).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mb-1">
                <strong>Delivery Status:</strong>{" "}
                <span
                  className={`badge px-3 py-2 ${
                    info.status === "COMPLETE"
                      ? "bg-success"
                      : info.status === "PENDING"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {info.status}
                </span>
              </p>
            </div>

            <div className="text-md-end">
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={handleGeneratePDF}
              >
                Download PDF Invoice
              </button>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="h5 mb-3 text-secondary">Shipping Information</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{info.buyer_name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{info.email}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{info.address}</td>
                </tr>
                <tr>
                  <th>Courier Service</th>
                  <td>Pathao Courier</td>
                </tr>
                <tr>
                  <th>Expected Delivery</th>
                  <td>3-5 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h2 className="h5 mb-3 text-secondary">Billing Information</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Payment Method</th>
                  <td>SSLCOMMERZ</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        info.status === "COMPLETE"
                          ? "bg-success"
                          : info.status === "PENDING"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {info.status}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>Total Amount</th>
                  <td>
                    <strong>
                      <span className="fs-4">৳ </span>
                      {info.price}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <NavLink className="btn btn-outline-primary me-2" to="/orders">
              Back to Orders
            </NavLink>
            <NavLink className="btn btn-primary" to={`/reviews/${info.id}`}>
              Leave a Review
            </NavLink>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default OrderDetails;
