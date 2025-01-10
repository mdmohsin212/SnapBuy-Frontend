import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  const user_id = localStorage.getItem("user_id");
  const [profileData, setProfile] = useState([]);
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://snapbuy-backend.onrender.com/user/profile/?id=${user_id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data[0].user))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snapbuy-backend.onrender.com/payment/orderitem/?user_id=${user_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header text-center text-white bg-black">
                <h3 className="card-title m-0">Profile</h3>
              </div>
              <div className="card-body text-center">
                <div className="mb-4">
                  <img
                    src="./images/pic.jpg"
                    alt="Profile"
                    className="rounded-circle img-thumbnail shadow-sm w-25"
                  />
                </div>
                <hr />
                <div className="text-start ps-5">
                  <p>
                    <strong className="bg">Name : </strong>
                    <span>
                      {profileData.first_name} {profileData.last_name}
                    </span>
                  </p>
                  <p>
                    <strong className="bg">Email : </strong>
                    <span>{profileData.email}</span>
                  </p>
                  <p>
                    <strong className="bg">Username : </strong>
                    <span>{profileData.username}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center pt-5 pb-2">Buy History</h1>
          <hr className="w-75 m-auto" />
        </div>

        <div className="w-75 m-auto">
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : products.length === 0 ? (
            <p className="text-center fw-medium">No Product available.</p>
          ) : (
            products.map((item) => (
              <div key={item.id} className="p-4 mb-4 border rounded">
                <div className="row g-4">
                  <div className="col-sm-12 col-md-8 d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid border rounded"
                      src={item.product_img}
                      alt=""
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="text-start ps-4">
                      <h5 className="mb-3">{item.product_title}</h5>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <small className="text-truncate">
                      <i className="far fa-calendar-alt text-primary"></i>
                      Buy Date:{" "}
                      {new Date(item.buying_time).toLocaleDateString()}
                    </small>

                    <div className="d-flex mb-3 mt-3 gap-2">
                      <Link className="btn btn-outline-dark m-2" to={`/buy_info/${item.id}`}>See More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
