import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { CartHandel } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = () => {
  const id = useParams().id;
  const [product, setProduct] = useState([]);
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id");
  let authecat = user_id ? true : false;

  useEffect(() => {
    fetch(
      `https://snapbuy-backend.onrender.com/product/review/?product_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://snapbuy-backend.onrender.com/product/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

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
              <h5>
                <i className="fas fa-star me-2 fs-5"></i>
                {product.get_rating.toFixed(1)}
              </h5>
              <h3 className="display-6 my-4">
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
              {authecat ? (
                <Link to="/cart" className="btn btn-dark mx-3">
                  Go to Cart
                </Link>
              ) : (
                <Link to="/login" className="btn btn-dark mx-3">
                  Go to Cart
                </Link>
              )}
            </div>
          </div>

          <div className="mt-5">
            <hr />
            <h2 className="pt-3">Customer Reviews</h2>
            {comments.length > 0 ? (
              <div className="row">
                {comments.map((comment) => (
                  <div className="col-12 mb-4" key={comment.id}>
                    <div className="card border-1 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{comment.name}</h5>
                        <p className="card-text">
                          <i className="fas fa-star text-warning me-2"></i>
                          {comment.star} / 5
                        </p>
                        <p className="card-text">{comment.body}</p>
                        <p className="text-muted small">
                          <i className="far fa-clock me-1"></i>
                          {new Date(comment.created_time).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">
                No reviews available for this product.
              </p>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default ProductInfo;
