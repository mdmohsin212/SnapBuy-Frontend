import React, { useState } from "react";
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 sticky-top p-5">
        <div className="container-fluid d-flex justify-content-between w-100">
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
                <div className="d-flex align-items-center gap-3 justify-content-center justify-content-sm-start">
                  <div className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="accountDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                    </NavLink>
                    Account
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="accountDropdown"
                    >
                      <li>
                        <NavLink className="dropdown-item" to="/profile">
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/orders">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="me-2"
                          />
                          Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/signup"
                          onClick={() => UserLogout()}
                        >
                          <FontAwesomeIcon
                            icon={faRightToBracket}
                            className="me-2"
                          />
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                    <style>
                      {`
                  .dropdown-toggle::after {
                    display: none;
                  }
                `}
                    </style>
                  </div>
                  <div>
                    <NavLink to="/cart" className="nav-link">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </NavLink>
                    <NavLink
                      to="/cart"
                      className="text-decoration-none text-dark"
                    >
                      Cart
                    </NavLink>
                  </div>
                </div>
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
    </div>
  );
};

export default Nav;
