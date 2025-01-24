import React from "react";
import ProfileNav from "./Profile_nav";
import Footer from "./../pages/Footer";

const Reviews = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1 flex-wrap">
        <div className="col-12 col-md-2 bg-light py-3 d-flex justify-content-center align-items-center">
          <ProfileNav />
        </div>

        <div className="col-12 col-md-10 mt-4 pb-5">
          <div className="container w-100 w-md-75 m-auto p-3">
            <h1>This is reviews</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
