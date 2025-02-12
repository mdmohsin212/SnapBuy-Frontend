import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProfileNav from "./Profile_nav";

const AdminProfile = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 order-md-2 pb-5 pt-md-2">
          <div className="container">
            <div className="main-body pt-3">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <div className="d-flex align-items-center justify-content-center rounded-circle">
                          <img
                            src="../images/pic.jpg"
                            className="w-50"
                            alt=""
                          />
                        </div>
                        <div className="mt-3">
                          <h4>
                            MD MOHSIN
                          </h4>
                        </div>
                        <div className="mt-3">
                          <h5>
                            Admin
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3 p-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Username</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            style={{
                              backgroundColor: "#f2f2f2",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            siam
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">First Name</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            style={{
                              backgroundColor: "#f2f2f2",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            Md
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Last Name</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            style={{
                              backgroundColor: "#f2f2f2",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            Mohsin
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            style={{
                              backgroundColor: "#f2f2f2",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            siam.mohsin2005@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProfile;
