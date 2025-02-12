import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        {/* Logo Section */}
        <div className="footer-social">
          <h2>
            <p className="logo-linkfooter">Task Flow Services</p>
          </h2>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="#">Become a Tasker</a>
              </li>
              <li>
                <a href="#">Services By City</a>
              </li>
              <li>
                <a href="#">Services Nearby</a>
              </li>
              <li>
                <a href="#">All Services</a>
              </li>
              <li>
                <a href="#">Elite Taskers</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Terms & Privacy</a>
              </li>
              <li>
                <a href="#">Do Not Sell My Personal Information</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <p>Follow us! We're friendly:</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <>
              {" "}
              <Link to="/become-tasker" className="button-50 me-2">
                Become a Tasker{" "}
              </Link>
            </>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
