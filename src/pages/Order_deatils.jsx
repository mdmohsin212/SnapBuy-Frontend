import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";

const OrderDetails = () => {

  const [ products, setProduct ] = useState([]);
  const [ Productloading, setProductloading ] = useState(true);
  const { id } = useParams();

  useEffect(() =>{
    fetch(`https://snap-buy-backend.vercel.app/payment/orderitem/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
      setProductloading(false);
    })
    .catch((err) => console.error(err))
  }, [])

  // convert jsx to pdf
  const handleGeneratePDF = () => {
    const input = document.getElementById("order-details-container");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Order_${products.id}.pdf`);
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {Productloading ? (
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
                <strong>Order ID:</strong> {products.id}
              </p>
              <p className="mb-1">
                <strong>Transaction ID:</strong> {products.tran_id}
              </p>
              <p className="mb-1">
                <strong>Order Date:</strong>{" "}
                {new Date(products.buying_time).toLocaleDateString("en-US", {
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
                    products.status === "COMPLETE"
                      ? "bg-success"
                      : products.status === "PENDING"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {products.status}
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
            <h2 className="h5 mb-3 text-secondary">Shipping productsrmation</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{products.buyer_name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{products.email}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{products.address}</td>
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
            <h2 className="h5 mb-3 text-secondary">Billing productsrmation</h2>
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
                        products.status === "COMPLETE"
                          ? "bg-success"
                          : products.status === "PENDING"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {products.status}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>Total Amount</th>
                  <td>
                    <strong>
                      <span className="fs-4">৳ </span>
                      {products.price}
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
            <NavLink className="btn btn-primary" to={`/reviews/${products.id}`}>
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
