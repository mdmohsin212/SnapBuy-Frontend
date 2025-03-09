import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { userLogin } from "../context/auth";

const Login = () => {

  useEffect(() => {
      document.getElementById("Customer").addEventListener("click", (event) => {
        document.getElementById("username").value = "mohsin416";
        document.getElementById("Password").value = "SIAM123456";
      });

      document.getElementById("Admin").addEventListener("click", (event) => {
        window.location.href = "/admin/login";
      });
    });

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="container pt-5">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="border rounded p-3 my-2">
              <h3 className="bg">For Testing</h3>
              <div className="d-flex gap-3 pb-3">
                <button className="btn btn-outline-dark" id="Customer">
                  As Customer
                </button>
                <button className="btn btn-outline-dark" id="Admin">
                  As Admin
                </button>
              </div>
            </div>
            <form>
              <div className="my-3">
                <label>Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/signup"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={userLogin}
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

export default Login;
