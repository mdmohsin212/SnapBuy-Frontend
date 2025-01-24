import React from "react";
import ProfileNav from "./Profile_nav";
import Footer from "./../pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PasswordChangeHandel } from './app';

const ChangePassword = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
        <div className="col-12 col-md-2 order-1 d-flex justify-content-center align-items-center text-center bg-light py-3">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 pb-5">
          <div className="w-100 w-md-75 m-auto p-3">
            <form
              method="post"
              className="w-75 w-md-50 m-auto p-4 border rounded shadow-sm bg-light"
            >
              <h3 className="text-center mb-4">Change Password</h3>

              <div className="mb-3">
                <label htmlFor="previousPassword" className="form-label">
                  Previous Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="previousPassword"
                  placeholder="Enter Previous Password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Password"
                  placeholder="Enter New Password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">
                  Repeat New Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password2"
                  placeholder="Repeat New Password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={(e) => PasswordChangeHandel(e)}
                >
                  Change Password
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

export default ChangePassword;