import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to Snapbuy, your one-stop online destination for a seamless
          and enjoyable shopping experience. At Snapbuy, we are committed to
          providing high-quality products, exceptional customer service, and a
          secure platform for all your shopping needs. With a wide range of
          categories, from fashion to electronics, we ensure there is something
          for everyone. Our mission is to make shopping convenient, affordable,
          and enjoyable for our customers. We continuously strive to bring you
          the latest trends and top-notch products, ensuring that every purchase
          is worth your time and money. Thank you for choosing Snapbuy; we look
          forward to serving you!
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./images/about1.png"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./images/about2.png"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./images/about3.png"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./images/about4.png"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
