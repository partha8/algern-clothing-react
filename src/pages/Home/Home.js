import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";

import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="parallax-wrapper">
        <Navbar checkHome={"/"} />
        <header className="parallax-group header">
          <header className="parallax-layer base-layer">
            <img
              className=" hero-img"
              src="https://images.pexels.com/photos/10675899/pexels-photo-10675899.jpeg?cs=srgb&dl=pexels-cottonbro-10675899.jpg&fm=jpg"
              alt="hero"
            />
          </header>
          <h1 className="hero-text parallax-layer mid-layer">
            Style is forever
          </h1>
        </header>

        <main className="home-page-main parallax-group">
          <section className="story">
            <p className="lead">
              At Algern Clothing, our goal is to improve the quality of every
              product that we make. We believe that manufacturing is a sacred
              process. We focus on making every day essentials out of luxury
              materials. We push the envelope from our studio in New York.
            </p>
          </section>

          <section className="collection-container">
            <Link className="collection" to="/product-listing">
              {" "}
              <img
                className="collection-img"
                src="https://images.pexels.com/photos/3151296/pexels-photo-3151296.jpeg?cs=srgb&dl=pexels-marlon-schmeiski-3151296.jpg&fm=jpg"
                alt="women apparels"
              />
              <h1 className="collection-title">
                women <br /> apparels
              </h1>
            </Link>
            <Link to="/product-listing" className="collection">
              <img
                className="collection-img"
                src="https://images.pexels.com/photos/9208222/pexels-photo-9208222.jpeg?cs=srgb&dl=pexels-cottonbro-9208222.jpg&fm=jpg"
                alt="men apparels"
              />
              <h1 className="collection-title">
                men <br /> apparels
              </h1>
            </Link>
            <Link to="/product-listing" className="collection">
              <img
                className="collection-img"
                src="https://images.pexels.com/photos/6147408/pexels-photo-6147408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="new outerwear"
              />
              <h1 className="collection-title">
                new outerwear <br /> collection
              </h1>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
