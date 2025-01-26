import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { ReviewHandel } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviews = () => {
  const id = useParams().id;

  useEffect(() => {
    const starRating = document.getElementById("star-rating");
    const selectedRating = document.getElementById("selected-rating");

    starRating.addEventListener("click", function (e) {
      if (e.target.matches(".fa-star")) {
        const rating = e.target.getAttribute("data-rating");
        selectedRating.value = rating;
        updateStars(rating);
      }
    });

    function updateStars(rating) {
      const stars = starRating.querySelectorAll(".fa-star");
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.remove("far");
          star.classList.add("fas");
        } else {
          star.classList.remove("fas");
          star.classList.add("far");
        }
      });
    }
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://snapbuy-backend.onrender.com/product/list/${id}/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <ToastContainer position="top-center" />
      <div className="container py-5">
        <form className="bg-white p-4 rounded shadow-sm">
          <div className="d-flex align-items-center mb-4">
            <div className="me-4">
              <img
                src={data.img}
                className="img-fluid rounded"
                alt={data.name}
                style={{ maxWidth: "150px" }}
              />
            </div>
            <div>
              <h2 className="fw-bold">{data.title}</h2>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="form-label fw-bold">
              Your Rating
            </label>
            <div className="star-rating" id="star-rating">
              <i className="far fa-star me-2 fs-3" data-rating="1"></i>
              <i className="far fa-star me-2 fs-3" data-rating="2"></i>
              <i className="far fa-star me-2 fs-3" data-rating="3"></i>
              <i className="far fa-star me-2 fs-3" data-rating="4"></i>
              <i className="far fa-star me-2 fs-3" data-rating="5"></i>
            </div>
            <input type="hidden" name="rating" id="selected-rating" value="0" />
          </div>

          <div className="mb-4">
            <label htmlFor="review" className="form-label fw-bold">
              Your Review
            </label>
            <textarea
              className="form-control"
              id="review"
              rows="5"
              placeholder="Share your thoughts..."
              required
            />
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label fw-bold">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100 py-2 mt-3"
            onClick={(e) => {
              e.preventDefault();
              ReviewHandel(e, id);
            }}
          >
            Submit Review
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
