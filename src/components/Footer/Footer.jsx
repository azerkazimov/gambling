import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-center">
            <ul className="navbar-item column">
              <li>
                <RouterLink to="/about" className="navbar-link">
                  Terms & Condition
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/news" className="navbar-link">
                  Cookies
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" className="navbar-link">
                  Contact
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/career" className="navbar-link">
                  Careers
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/brand" className="navbar-link">
                  Brand Guide
                </RouterLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-end flex-justify-sm-center">
            <div className="sosial-media">
              <p>Our sosial media:</p>
              <ul>
                <li>
                  <RouterLink to="https://twitter.com">
                    <FaTwitter />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://fb.com">
                    <FaFacebookF />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://instagram.com">
                    <FaInstagram />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://linkedin.com">
                    <FaLinkedin />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://youtube.com">
                    <FaYoutube />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://tiktok.com">
                    <FaTiktok />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://telegram.com">
                    <FaTelegramPlane />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="https://vk.com">
                    <SlSocialVkontakte />
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
