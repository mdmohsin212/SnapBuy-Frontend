import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { CartHandel } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://snapbuy-backend.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setFilter(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  const ProductFilter = (category) => {
    if (category === "all") {
      setFilter(product);
    } 
    else {
      const filteredItems = product.filter((item) =>
        item.category_name.some(
          (cat) => cat === category
        )
      );
      setFilter(filteredItems);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="buttons text-center py-4">
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => ProductFilter("all")}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => ProductFilter("Men's Clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => ProductFilter("Women's Clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => ProductFilter("Jewelery")}
        >
          Jewelry
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => ProductFilter("Electronics")}
        >
          Electronics
        </button>
      </div>
      <div className="container">
        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : filter.length > 0 ? (
          <div className="row">
            {filter.map((product) => (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
              >
                <div className="card text-center h-100">
                  <img
                    className="card-img-top p-3"
                    src={product.img}
                    alt={product.title}
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text">
                      {product.description.substring(0, 90)}...
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">
                      {" "}
                      <span className="fs-4">৳ </span> {product.price}
                    </li>
                  </ul>
                  <div className="card-body">
                    <Link
                      to={`/product_details/${product.id}`}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={(e) => CartHandel(e, product.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-center p-5 mt-5">No products found.</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
