import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProfileNav from "./Profile_nav";

const Profile = () => {
  const user_id = localStorage.getItem("user_id");
  const [info, setInfo] = useState({});
    const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch(`https://snap-buy-backend.vercel.app/user/profile/?id=${user_id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data[0].user))
      .catch((error) => console.error(error));
  }, []);

    const handleInputChange = (e) => {
      const { name, value } = e.target; 
      setInfo({ ...info, [name]: value });
    };

    const EditMode = () => {
      setEditMode(!isEditMode);
    };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start bg-light py-1">
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
                            {info.first_name} {info.last_name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
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
                            {info.username || "Username"}
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
                            {info.first_name || "First Name"}
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
                            {info.last_name || "Last Name"}
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
                            {info.email || "example@domain.com"}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9">
                          {isEditMode ? (
                            <input
                              type="text"
                              name="phone"
                              value={info.phone || ""}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          ) : (
                            <p
                              style={{
                                backgroundColor: "#f2f2f2",
                                padding: "10px",
                                borderRadius: "5px",
                                margin: "0",
                              }}
                            >
                              {info.phone || "empty"}
                            </p>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9">
                          {isEditMode ? (
                            <input
                              type="text"
                              name="address"
                              value={info.address || ""}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          ) : (
                            <p
                              style={{
                                backgroundColor: "#f2f2f2",
                                padding: "10px",
                                borderRadius: "5px",
                                margin: "0",
                              }}
                            >
                              {info.address || "empty"}
                            </p>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <button
                            className="btn btn-primary"
                            onClick={EditMode}
                          >
                            {isEditMode ? "Save" : "Edit"}
                          </button>
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

export default Profile;
