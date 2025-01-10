import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";

const BuyInfo = () =>{
    const id = useParams().id;
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://snapbuy-backend.onrender.com/payment/orderitem/${id}/`)
        .then((res) => res.json())
        .then((data) =>{
            setInfo(data);
            setLoading(false);
        })
    },[id])
    return (
      <div className="d-flex flex-column min-vh-100">
        {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) :(
        <div className="pt-5 text-center">
          <table class="table table-bordered w-50 m-auto">
            <tbody>
              <tr>
                <th scope="row">Id</th>
                <td>{info.id}</td>
              </tr>
              <tr>
                <th scope="row">Product Title</th>
                <td>{info.product_title}</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>{info.price}</td>
              </tr>
              <tr>
                <th scope="row">Transaction Id</th>
                <td>{info.tran_id}</td>
              </tr>
              <tr>
                <th scope="row">Date</th>
                <td>{new Date(info.buying_time).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
          <div className="pt-3">
            <Link className="btn btn-outline-dark m-2" to={"/profile"}>
              Back to Profile
            </Link>
          </div>
        </div>
          )}
        <Footer />
      </div>
    );
}

export default BuyInfo;