import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";
import { CartHandel } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = () => {
    const id = useParams().id;
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://snapbuy-backend.onrender.com/product/list/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProduct(data);
            setLoading(false);
        });
    },[id]);

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
          <div className="container my-5 py-2">
            <div className="row">
              <div className="col-md-6 col-sm-12 py-3">
                <img
                  className="img-fluid"
                  src={product.img}
                  width="330px"
                  height="300px"
                />
              </div>
              <div className="col-md-6 col-md-6 py-5">
                <h1 className="display-5">{product.title}</h1>
                <h3 className="display-6  my-4">
                  <span className="fs-1">৳ </span>
                  {product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button
                  className="btn btn-outline-dark"
                  onClick={(e) => CartHandel(e, product.id)}
                >
                  Add to Cart
                </button>
                <Link to="/cart" className="btn btn-dark mx-3">
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
};
export default ProductInfo;