import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";

const Profile = () => {
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
                    src="src/images/pic.jpg"
                    alt="Profile"
                    className="rounded-circle img-thumbnail shadow-sm w-25"
                  />
                </div>
                <hr />
                <div className="text-start ps-5">
                  <p>
                    <strong className="bg">Name : </strong>
                    <span>
                      siam
                    </span>
                  </p>
                  <p>
                    <strong className="bg">Email : </strong>
                    <span>test</span>
                  </p>
                  <p>
                    <strong className="bg">Username : </strong>
                    <span>username</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center pt-5">Buy History</h1><hr className="w-75 m-auto"/>
      </div>
      <Footer />
    </div>  
  );
};

export default Profile;