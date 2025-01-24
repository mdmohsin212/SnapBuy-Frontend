import React from "react";
import Footer from "./Footer";
import { ContactHandel } from '../components/app';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label className="mb-2">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form my-3">
                <label className="mb-2">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  onClick={ContactHandel}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
