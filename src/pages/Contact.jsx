import React from "react";
import Footer from "./Footer";
import { ContactHandel } from "../components/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label className="mb-2">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label className="mb-2">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  onClick={ContactHandel}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="images/contact.png"
              className="img-fluid rounded-3 w-75"
              alt="Contact illustration"
            />
          </div>
        </div>
        <div className="row mt-2 text-center">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center rounded p-3">
              <div
                className="bg-white border rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "black", fontSize: "24px" }}
                />
              </div>
              <h6 className="fw-bold">Phone</h6>
              <p>
                The phrasal sequence of the is now so that <br /> many campaign
                and benefit
              </p>
              <p className="mb-0 bg fw-bold">+8801627568419</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center rounded p-3">
              <div
                className="bg-white border rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  style={{ color: "black", fontSize: "24px" }}
                />
              </div>
              <h6 className="fw-bold">Email</h6>
              <p>
                The phrasal sequence of the is now so that <br /> many campaign
                and benefit
              </p>
              <p className="mb-0 fw-bold bg">siam.mohsin2005@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center rounded p-3">
              <div
                className="bg-white border rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "black", fontSize: "24px" }}
                />
              </div>
              <h6 className="fw-bold">Address</h6>
              <p>
                The phrasal sequence of the is now so that <br /> many campaign
                and benefit
              </p>
              <p className="mb-0 fw-bold bg">
                25/12 Bandar, Narayanganj, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
