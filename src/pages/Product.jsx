import React, { useState, useEffect, useContext } from "react";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "./../context/ProductContext";

const Product = () => {
  const { allProduct, loading } = useContext(ProductContext);
  const [filter, setFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  useEffect(() => {
    let filteredItems = allProduct;

    if (selectedCategory !== "all") {
      filteredItems = filteredItems.filter((item) =>
        item.category_name.some((cat) => cat === selectedCategory)
      );
    }

    if (search) {
      filteredItems = filteredItems.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.price.toString().includes(search)
      );
    }
    setFilter(filteredItems);
    setCurrentPage(1);
  }, [search, allProduct, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const LastItem = currentPage * itemsPerPage;
  const FirstItem = LastItem - itemsPerPage;
  const currentItems = filter.slice(FirstItem, LastItem);
  const totalPages = Math.ceil(filter.length / itemsPerPage);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <span style={{ color: "#fbc02d", fontSize: "1.60rem" }}>
        {"★".repeat(fullStars)}
        {hasHalfStar ? "⯪" : ""}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="px-3 mt-5">
        <div className="row">
          <div className="col-lg-3 pt-0 mt-0 pt-md-5 mt-md-3">
            <div className="mb-4 p-3 border rounded bg-light shadow-sm">
              <h5 className="text-center text-dark">Search</h5>
              <input
                id="search-input"
                className="form-control"
                type="search"
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="mb-4 p-3 border rounded bg-light shadow-sm">
              <h5 className="text-center">Filter by Category</h5>
              {[
                "all",
                "Mobile",
                "Laptop",
                "Monitor",
                "Desktop",
                "Camera",
                "Gaming Console",
              ].map((category) => (
                <div className="form-check" key={category}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={category}
                    name="categoryFilter"
                    checked={selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label className="form-check-label" htmlFor={category}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-center mb-0 fw-bold text-dark w-100">
                Our Products
              </h2>
              <select id="sort-filter" className="form-select w-auto ms-auto">
                <option value="">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="row">
              {loading ? (
                <div className="d-flex justify-content-center py-5">
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : currentItems.length > 0 ? (
                currentItems.map((product) => (
                  <div
                    key={product.id}
                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
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
                        <p className="card-title">{product.title}</p>
                        <div className="mb-2">
                          {renderStars(parseFloat(product.get_rating))}
                        </div>
                        <span
                          className="fw-bold"
                          style={{ color: "#000000", fontSize: "1.2rem" }}
                        >
                          <span className="fs-4">৳ </span> {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="text-center p-5 mt-5">No products found.</h3>
              )}
            </div>
            {location.pathname !== "/" && (
              <div className="text-center mt-4 my-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`btn mx-1 fs-5 ${
                      currentPage === index + 1
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default Product;
