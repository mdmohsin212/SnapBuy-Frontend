import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Footer from "./../pages/Footer";
import { handleGeneratePDF } from "./../context/pdf";

const OrderDetails = () => {
  const id = useParams().id; 
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://snapbuy-backend.onrender.com/payment/orderitem/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container w-100 w-md-75 my-4 mx-auto px-3">
          <h1 className="text-center mb-4">Order Details</h1>

          <div className="table-responsive mb-4">
            <div className="d-flex justify-content-between">
              <h2 className="h5">Shipping Information</h2>
              <NavLink
                className="btn btn-sm btn-primary mb-4 text-start"
                onClick={() => handleGeneratePDF(info.id)}
              >
                PDF Invoice
              </NavLink>
            </div>
            <table className="table table-bordered">
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
                  <th>Transaction Id#</th>
                  <td>{info.tran_id}</td>
                </tr>
                <tr>
                  <th>Order Date</th>
                  <td>
                    {new Date(info.buying_time).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                </tr>
                <tr>
                  <th>Delivered By</th>
                  <td>Pathao Courier</td>
                </tr>
                <tr>
                  <th>Delivery Status</th>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-responsive">
            <h2 className="h5">Billing Information</h2>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Last Payment Method</th>
                  <td>SSLCOMMERZ</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>{info.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default OrderDetails;
