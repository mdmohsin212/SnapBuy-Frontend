import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [allProduct, setProduct] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://snapbuy-backend.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setFilter(location.pathname === "/" ? data.slice(0, 9) : data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [location.pathname]);

  const ProductFilter = (category) => {
    if (category === "all") {
      setFilter(
        location.pathname === "/" ? allProduct.slice(0, 9) : allProduct
      );
    } else {
      const filteredItems = allProduct.filter((item) =>
        item.category_name.some((cat) => cat === category)
      );
      setFilter(
        location.pathname === "/" ? filteredItems.slice(0, 9) : filteredItems
      );
    }
  };

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
      <div className="container">
        <div className="row">
          {location.pathname === "/product" && (
            <div className="col-md-2 card h-25 m-5 p-3 cusom-filter">
              <h5 className="text-center">Filter by Category</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="all"
                  onChange={() => ProductFilter("all")}
                />
                <label className="form-check-label" htmlFor="all">
                  All
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mens"
                  onChange={() => ProductFilter("Men's Clothing")}
                />
                <label className="form-check-label" htmlFor="mens">
                  Men's Clothing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="womens"
                  onChange={() => ProductFilter("Women's Clothing")}
                />
                <label className="form-check-label" htmlFor="womens">
                  Women's Clothing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="jewelry"
                  onChange={() => ProductFilter("Jewelery")}
                />
                <label className="form-check-label" htmlFor="jewelry">
                  Jewelry
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="electronics"
                  onChange={() => ProductFilter("Electronics")}
                />
                <label className="form-check-label" htmlFor="electronics">
                  Electronics
                </label>
              </div>
            </div>
          )}

          {location.pathname === "/" && (
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
          )}
          <div
            className={
              location.pathname === "/product"
                ? "col-md-9 pt-5"
                : "col-12 text-center py-4"
            }
          >
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
                    onClick={() => navigate(`/product_details/${product.id}`)}
                  >
                    <div className="card text-center h-100 bord">
                      <img
                        className="card-img-top p-3"
                        src={product.img}
                        alt={product.title}
                        height={300}
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          {product.title.substring(0, 12)}...
                        </h4>
                        <div className="mb-2">
                          {renderStars(parseFloat(product.get_rating))}
                        </div>
                        <span
                          className="fw-bold"
                          style={{ color: "#2a50ef", fontSize: "1.2rem" }}
                        >
                          <span className="fs-4">৳ </span> {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {location.pathname === "/" && (
                  <div className="mb-5 mt-0 text-center">
                    <NavLink
                      className="btn-lg px-4 text-decoration-none rounded-pill shadow p-1 text-white"
                      to="/product"
                      style={{ backgroundColor: "#2a50ef" }}
                    >
                      See More
                    </NavLink>
                  </div>
                )}
              </div>
            ) : (
              <h3 className="text-center p-5 mt-5">No products found.</h3>
            )}
          </div>
        </div>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default Product;
