import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { AdminLoginHandle } from "../context/auth";

const AdminLogin = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="container pt-5">
        <h1 className="text-center">Welcome Admin</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="admin-username"
                  placeholder="Username"
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="admin-password"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={AdminLoginHandle}
                >
                  Login
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

export default AdminLogin;
