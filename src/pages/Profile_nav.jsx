import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaClipboardList, FaLock } from "react-icons/fa"; // Icons
import "../styles/style.css";

class ProfileNav extends Component {
  render() {
    return (
      <div
        className="profile-nav bg-light p-2 d-flex flex-column h-100"
        style={{ width: "230px" }}
      >
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="profile-nav-link nav-link text-dark px-3 py-2 rounded d-flex align-items-center"
              to="/profile"
            >
              <FaUser className="me-2" /> Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="profile-nav-link nav-link text-dark px-3 py-2 rounded d-flex align-items-center"
              to="/orders"
            >
              <FaClipboardList className="me-2" /> Order History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="profile-nav-link nav-link text-dark px-3 py-2 rounded d-flex align-items-center"
              to="/change_password"
            >
              <FaLock className="me-2" /> Change Password
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileNav;
