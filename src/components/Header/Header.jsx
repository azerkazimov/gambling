import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Banner from "../../components/Banner/Banner";

function Header() {
  return (
    <div className="header ">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-4 flex-container flex-align-center">
            <div className="header-banner">
              <h1>
                HOUSE OF <span>GAMBLING</span>
              </h1>
              <p>Raise your ROI with direct advertiser</p>
              <RouterLink to="/">
                <button className="btn">Become a Partner</button>
              </RouterLink>
            </div>
          </div>
          <div className="col-12 col-lg-4 flex-container flex-align-center flex-justify-center relative">
            <Banner />
          </div>
          <div className="col-12 col-lg-4 flex-container flex-align-center flex-justify-center mb-10">
            <div className="blog">
              <h4>Blog</h4>
              <div className="blog-items">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
