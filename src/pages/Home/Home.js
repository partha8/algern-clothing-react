import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { useStateContext } from "../../context/StateProvider";

import "./home.css";

export const Home = () => {
  const { filterDispatch } = useStateContext();
  return (
    <>
      <div className="parallax-wrapper">
        <Navbar checkHome={"/"} />
        <header className="parallax-group header">
          <header className="parallax-layer base-layer">
            <img className=" hero-img" src="/header.jpg" alt="hero" />
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
            <Link
              className="collection"
              to="/product-listing"
              onClick={() =>
                filterDispatch({
                  type: "SORT_BY_CATEGORY",
                  payload: "women",
                })
              }
            >
              {" "}
              <img
                className="collection-img"
                src="/women.jpg"
                alt="women apparels"
              />
              <h1 className="collection-title">
                women <br /> apparels
              </h1>
            </Link>
            <Link
              to="/product-listing"
              onClick={() =>
                filterDispatch({
                  type: "SORT_BY_CATEGORY",
                  payload: "men",
                })
              }
              className="collection"
            >
              <img
                className="collection-img"
                src="/men.jpg"
                alt="men apparels"
              />
              <h1 className="collection-title">
                men <br /> apparels
              </h1>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
