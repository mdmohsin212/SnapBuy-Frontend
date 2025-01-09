import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { UserLogout } from "../context/auth";

const Nav = () => {
  let isAuthenticated = false;
  const userData = localStorage.getItem("token");
  const userid = localStorage.getItem("user_id");

  if (userData && userid) {
    isAuthenticated = true;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3" to="/">
            SnapBuy
          </NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="text-center">
              {isAuthenticated ? (
                <>
                  <NavLink to="/cart" className="btn btn-outline-dark m-2">
                    <FontAwesomeIcon icon={faCartShopping} /> Cart
                  </NavLink>
                  <NavLink to="/profile" className="btn btn-outline-dark m-2">
                    <FontAwesomeIcon icon={faUser} /> Profile
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="btn btn-outline-dark m-2"
                    onClick={() => UserLogout()}
                  >
                    <FontAwesomeIcon icon={faRightToBracket} /> Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark m-2">
                    <FontAwesomeIcon icon={faRightToBracket} /> Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-outline-dark m-2">
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
