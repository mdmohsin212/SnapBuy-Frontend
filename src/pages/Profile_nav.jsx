import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaClipboardList,
  FaLock,
  FaShippingFast,
  FaClipboardCheck,
} from "react-icons/fa";
import "../styles/style.css";

class ProfileNav extends Component {
  render() {
      let isAdmin = false;
      const userid = localStorage.getItem("user_id");
      if (userid == 1) {
          isAdmin = true;
        }
    return (
      <div
        className="profile-nav d-flex flex-column h-100 w-100"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <ul
          className="nav flex-column text-start p-2"
          style={{
            width: "240px",
          }}
        >
          {isAdmin ? (
            <div>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-item active-link-item"
                      : "nav-link-item"
                  }
                  to="/overview"
                >
                  <FaUser className="me-2" /> Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-item active-link-item"
                      : "nav-link-item"
                  }
                  to="/running_order"
                >
                  <FaShippingFast className="me-2" /> Running Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-item active-link-item"
                      : "nav-link-item"
                  }
                  to="/complete_order"
                >
                  <FaClipboardCheck className="me-2" /> Complete Order
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-item active-link-item"
                      : "nav-link-item"
                  }
                  to="/profile"
                >
                  <FaUser className="me-2" /> Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-item active-link-item"
                      : "nav-link-item"
                  }
                  to="/orders"
                >
                  <FaClipboardList className="me-2" /> Order History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-item active-link-item"
                      : "nav-link-item"
                  }
                  to="/change_password"
                >
                  <FaLock className="me-2" /> Change Password
                </NavLink>
              </li>
            </div>
          )}
        </ul>
        <style>
          {`
          .profile-nav .nav-link-item {
              color: black;
              margin-bottom: 6px;
              padding: 15px 20px;
              font-size: 18px;
              border-radius: 8px;
              text-decoration: none;
              display: flex;
              align-items: center;
            }
          .profile-nav .nav-link-item:hover {
              background-color: #0D6EFD;
              color: black;
            }
          .active-link-item {
              background-color: #0D6EFD !important;
              color: white !important;
            }
          @media (max-width: 768px) {
              .profile-nav {
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }
              .profile-nav .nav {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
              }
              .profile-nav .nav-link-item {
                  width: fit-content;
                  text-align: center;
              }
            }
         `}
        </style>
      </div>
    );
  }
}

export default ProfileNav;
