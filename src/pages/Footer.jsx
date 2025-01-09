import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-2">© 2025 SnapBuy. All Rights Reserved.</p>
        <div className="d-flex justify-content-center">
          <a
            className="text-white mx-3 fs-4"
            href="https://github.com/mdmohsin212/"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          > 
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="text-white mx-3 fs-4"
            href="https://www.facebook.com/profile.php?id=100082320175940"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
