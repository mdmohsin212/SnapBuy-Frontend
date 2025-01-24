import React from "react";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { UserRegistration } from "../context/auth";

const SignUp = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="my-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name2"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="my-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="my-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <label>Confirme Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  placeholder="Confirme Password"
                />
              </div>
              <div className="my-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={UserRegistration}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
