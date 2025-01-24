import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../styles/style.css'

class ProfileNav extends Component {
  render() {
    return (
      <div
        className="bg-light p-4 d-flex flex-column h-100"
        style={{ width: "250px" }}
      >
        <h4>My Profile</h4>
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark px-3 py-2 rounded"
              to="/profile"
            >
              Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark px-3 py-2 rounded"
              to="/orders"
            >
              Order History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark px-3 py-2 rounded"
              to="/change_password"
            >
              Change Password
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark px-3 py-2 rounded"
              to="/reviews"
            >
              My Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileNav;
