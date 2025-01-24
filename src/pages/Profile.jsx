import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProfileNav from "./../components/Profile_nav";

const Profile = () => {
  const user_id = localStorage.getItem("user_id");
  const [profileData, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://snapbuy-backend.onrender.com/user/profile/?id=${user_id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data[0].user))
      .catch((error) => console.error(error));
  }, []);

return (
  <div className="d-flex flex-column min-vh-100">
    <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
      <div className="col-12 col-md-2 order-1 order-md-1 d-flex justify-content-center align-items-center text-center bg-light py-3">
        <ProfileNav />
      </div>
      <div className="container-fluid mt-4 col-12 col-md-10 order-2 order-md-2 pb-5 pt-md-2">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header text-center text-white bg-black">
                <h3 className="card-title m-0">Profile</h3>
              </div>
              <div className="card-body text-center">
                <div className="mb-4">
                  <img
                    src="./images/pic.jpg"
                    alt="Profile"
                    className="rounded-circle img-thumbnail shadow-sm img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
                <hr />
                <div className="text-start ps-4">
                  <p>
                    <strong>Name: </strong>
                    <span>
                      {profileData.first_name} {profileData.last_name}
                    </span>
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <span>{profileData.email}</span>
                  </p>
                  <p>
                    <strong>Username: </strong>
                    <span>{profileData.username}</span>
                  </p>
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
}

export default Profile;
