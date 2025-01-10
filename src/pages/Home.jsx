import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Product from './Product';

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./images/main.png"
            height={500}
            alt="SnapBuy Hero Banner"
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                Discover the Latest Trends
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Explore our new season collection and elevate your style with
                exclusive deals on high-quality products. Your journey to
                effortless shopping begins here.
              </p>
              <Link to={"/product"} className="btn btn-outline-info">
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center p-3 fw-light">Latest Products</h1>{" "}
      <hr className="w-75 m-auto" />
      <Product />
    </>
  );
};

export default Home;
