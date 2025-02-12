import React from "react";
import { NavLink } from "react-router-dom";
import Product from './Product';
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-around flex-wrap px-5">
        <div className="d-flex justify-content-center align-items-center col-12 col-md-6 order-1 order-md-2">
          <img
            className="img-fluid custom-img"
            src="./images/home2.jpg"
            alt="SnapBuy Hero Banner"
          />
        </div>
        <div className="col-12 col-md-6 order-2 order-md-1 text-start d-flex justify-content-center align-items-center hero-text">
          <div>
            <h5 className="fs-1 text fw-lighter">Discover the Latest Trends</h5>
            <p className="fs-5 d-sm-block d-none">
              Explore our new season collection and elevate your style with
              exclusive deals on high-quality products. Your journey to
              effortless shopping begins here.
            </p>
            <p className="d-md-none">
              Explore our new season collection and elevate your style.
            </p>
            <NavLink to={"/product"} className="btn btn-primary">
              See Product
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center text-center py-5 custom-gap-md flex-column flex-sm-row"
        style={{
          flexWrap: "wrap",
        }}
      >
        <div className="offer">
          <img src="../images/icon5.svg" className="pb-2" alt="" />
          <h5>Free Shipping</h5>
          <p>For all orders over $200</p>
        </div>
        <div className="offer">
          <img src="../images/icon4.svg" className="pb-2" alt="" />
          <h5>Daily Promotions</h5>
          <p>Discount up to 70%</p>
        </div>
        <div className="offer">
          <img src="../images/icon3.svg" className="pb-2" alt="" />
          <h5>Free returns</h5>
          <p>Return for up to 7 days</p>
        </div>
        <div className="offer">
          <img src="../images/icon4.svg" className="pb-2" alt="" />
          <h5>Secure payments</h5>
          <p>Security guarantee</p>
        </div>
        <div className="offer">
          <img src="../images/icon5.svg" className="pb-2" alt="" />
          <h5>Gifts for members</h5>
          <p>Bonuses for members</p>
        </div>
      </div>

      <h1 className="text-center p-2 pb-0 fw-light">Latest Products</h1>
      <Product />

      <div className="text-center mt-3 p-5">
        <h4 className="pb-3">Exclusive brands in our store</h4>
        <hr className="w-75 m-auto pt-3" />
        <div className="d-flex justify-content-center align-items-center flex-wrap flex-column flex-md-row logo-gap">
          <img
            src="../images/logo-1.svg"
            className="img-fluid logo offer"
            alt=""
          />
          <img
            src="../images/logo-2.svg"
            className="img-fluid logo offer"
            alt=""
          />
          <img
            src="../images/logo-3.svg"
            className="img-fluid logo offer"
            alt=""
          />
          <img
            src="../images/logo-4.svg"
            className="img-fluid logo offer"
            alt=""
          />
          <img
            src="../images/logo-5.svg"
            className="img-fluid logo offer"
            alt=""
          />
        </div>
      </div>

      <div className="pb-3 px-1">
        <div className="news-letter h-100 d-flex justify-content-evenly align-items-center flex-column flex-md-row text-center">
          <div className="mb-4 text-start">
            <p className="fw-medium">Sign up for the newsletter</p>
            <h2>
              Receive a 10% discount <br /> on your purchases
            </h2>
          </div>
          <div className="w-50 bg-white p-4 rounded">
            <h2 className="text-dark pb-1">Join our newsletter</h2>
            <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Enter Name"
            />
            <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Enter Email"
            />
            <NavLink
              className="btn btn-primary w-100"
              onClick={() => window.location.reload()}
            >
              Subscribe
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mt-4 p-1">
        <h2 className="text-center">
          Betheme offers a seamless <br /> shopping experience at any scale
        </h2>
        <div className="d-flex justify-content-center flex-wrap p-4 mb-3 gap-4">
          <div
            className="card col-md-3 col-sm-12 text-center p-4 pb-0 bord"
            style={{ height: "350px" }}
          >
            <img
              className=" img-fluid offer"
              style={{ height: "110px" }}
              src="../images/d-icon-1.svg"
              alt=""
            />
            <h4 className="pt-4">Mobile shopping</h4>
            <p className="pt-2 fs-5">
              Experience seamless mobile shopping with a user-friendly interface
              that simplifies your purchasing journey
            </p>
          </div>
          <div
            className="card col-md-3 col-sm-12 text-center p-4 bord"
            style={{ height: "350px" }}
          >
            <img
              className=" img-fluid offer"
              src="../images/d-icon-2.svg"
              style={{ height: "110px" }}
              alt=""
            />
            <h4 className="pt-4">Secure payments</h4>
            <p className="pt-2 fs-5">
              Ensure secure payments with advanced encryption for a smooth and
              trusted transaction experience
            </p>
          </div>
          <div
            className="card col-md-3 col-sm-12 text-center p-4 bord"
            style={{ height: "350px" }}
          >
            <img
              className=" img-fluid offer"
              src="../images/d-icon-3.svg"
              style={{ height: "110px" }}
              alt=""
            />
            <h4 className="pt-4">Present packaging</h4>
            <p className="pt-2 fs-5">
              Experience premium packaging with attention to detail, offering
              both protection and style for your products
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
