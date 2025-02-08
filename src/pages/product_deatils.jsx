import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { CartHandel } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, SetrelatedLoading] = useState(true);
  const user_id = localStorage.getItem("user_id");
  let authecat = user_id ? true : false;

  useEffect(() => {
      fetch(
        `https://snap-buy-backend.vercel.app/product/list/?category=${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllProduct(data.slice(0, 3));
          console.log(data);
          SetrelatedLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    },[]);

  useEffect(() => {
    fetch(
      `https://snap-buy-backend.vercel.app/product/review/?product_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://snap-buy-backend.vercel.app/product/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const renderStars = (rating) => {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      return (
        <span style={{ color: "#2a50ef", fontSize: "1.35rem" }}>
          {"★".repeat(fullStars)}
          {hasHalfStar ? "⯪" : ""}
          {"☆".repeat(emptyStars)}
        </span>
      );
    };

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
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {comments.map((comment, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={comment.id}
                    >
                      <div
                        className="card p-3 shadow-sm w-50 m-auto"
                        style={{
                          backgroundColor: "#f2f2f2",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          <div>
                            <strong>{comment.name}</strong>{" "}
                            <span className="text-muted">
                              -{" "}
                              {new Date(comment.created_time).toLocaleString()}
                            </span>
                          </div>
                          <div>{renderStars(comment.star)}</div>
                        </div>
                        <hr className="my-2" />
                        <p className="text-start">{comment.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    style={{ filter: "invert(1)" }}
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    style={{ filter: "invert(1)" }}
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              <p className="text-muted">
                No reviews available for this product.
              </p>
            )}

            <div className="pt-5 text-center mt-5">
              <h1>Related Products</h1>
              <div className="d-flex flex-wrap justify-content-center gap-5 pt-3">
                {relatedLoading ? (
                  <div className="text-center my-3">
                    <div className="spinner-border text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  allProduct.map((item) => (
                    <div
                      key={item.id}
                      className="card col-md-3 col-12 text-center bord"
                      onClick={() =>{
                        navigate(
                          `/product_details/${item.id}/${item.category_name}`
                        )
                        window.location.reload();}
                      }
                    >
                      <img
                        className="card-img-top p-3"
                        src={item.img}
                        alt={item.title}
                        height={300}
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          {item.title.substring(0, 12)}...
                        </h4>
                        <div className="mb-2">
                          {renderStars(parseFloat(item.get_rating))}
                        </div>
                        <span
                          className="fw-bold"
                          style={{ color: "#2a50ef", fontSize: "1.2rem" }}
                        >
                          <span className="fs-4">৳ </span> {item.price}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default ProductInfo;
