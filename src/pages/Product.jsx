import React, { useState, useEffect, useContext } from "react";
import Footer from "./Footer";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from './../context/ProductContext';

const Product = () => {
  const { allProduct, loading } = useContext(ProductContext);
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setFilter(location.pathname === "/" ? allProduct.slice(0, 9) : allProduct);
  }, [location.pathname, allProduct]);

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
            <div className="col-md-1 card h-25 m-5 p-3 cusom-filter">
              <h5 className="text-center">Filter by Category</h5>
              {[
                "all",
                "Men's Clothing",
                "Women's Clothing",
                "Jewelery",
                "Electronics",
              ].map((category) => (
                <div className="form-check" key={category}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={category}
                    onChange={() => ProductFilter(category)}
                  />
                  <label className="form-check-label" htmlFor={category}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          <div
            className={"col-md-9 text-center py-4"}
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
                    onClick={() =>
                      navigate(
                        `/product_details/${product.id}/${product.category_name}`
                      )
                    }
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
