import React from "react";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [burger_class, setBurgerClass] = useState(false);
  const [burger_bar, setBurgerBar] = useState(false);

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const changeBG = () => {
    setNav(window.scrollY >= 20);
  };

  window.addEventListener("scroll", changeBG);

  const updateBurger = () => {
    setBurgerClass(!burger_class);
    setBurgerBar(!burger_bar);
  };

  return (
    <nav
      className={
        nav
          ? isMainPage
            ? "nav-bar active"
            : "nav-bar active other-page "
          : "nav-bar"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo"></div>
          </div>
          <div className="col-md-7 flex-container flex-align-center flex-justify-center">
            <ul className={`navbar-item ${burger_class ? "open" : "menu"}`}>
              <li>
                <RouterLink
                  to="/about"
                  className={`navbar-link ${
                    isMainPage ? "text-natural" : "text-secondary"
                  }`}
                  onClick={updateBurger}
                >
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/brand"
                  className={`navbar-link ${
                    isMainPage ? "text-natural" : "text-secondary"
                  }`}
                  onClick={updateBurger}
                >
                  Brands
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/comission"
                  className={`navbar-link ${
                    isMainPage ? "text-natural" : "text-secondary"
                  }`}
                  onClick={updateBurger}
                >
                  Comission
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="news"
                  className={`navbar-link ${
                    isMainPage ? "text-natural" : "text-secondary"
                  }`}
                  onClick={updateBurger}
                >
                  News
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className={`navbar-link ${
                    isMainPage ? "text-natural" : "text-secondary"
                  }`}
                  onClick={updateBurger}
                >
                  Contact Us
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/career"
                  className={`navbar-link ${
                    isMainPage ? "text-natural" : "text-secondary"
                  }`}
                  onClick={updateBurger}
                >
                  Careers
                </RouterLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3 flex-container flex-align-center">
            <div className="burger-menu" onClick={updateBurger}>
              <span className={burger_bar ? "click" : "unclick"}></span>
              <span className={burger_bar ? "click" : "unclick"}></span>
              <span className={burger_bar ? "click" : "unclick"}></span>
            </div>
            <ul className="btn-store">
              <li className="nav-btn">
                <GrLanguage />
                EN
              </li>
              <li className="nav-btn">Log In</li>
              <li className="nav-btn">Sing Up</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
