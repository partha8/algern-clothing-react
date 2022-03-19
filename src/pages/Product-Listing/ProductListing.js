import React from "react";
import { Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
// import { Filters } from "./Filters";
import "./product-listing.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ProductListing = () => {
  const { productsList, productsDispatch } = useStateContext();
  let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h3 className="text-center">Shop Our Collection </h3>
      <div className="product-listing">
        {/* <Filters /> */}
        <div className="products">
          {productsList.map((product) => {
            const {
              id,
              name,
              price,
              marker,
              image,
              addedToWishlist,
              addedToCart,
            } = product;
            return (
              <div key={id} className="card card-vertical">
                <div className="image-container-vert">
                  <img
                    className="img responsive-image product-image"
                    src={image.src}
                    alt={image.alt}
                  />
                  <FaHeart
                    onClick={() =>
                      productsDispatch({ type: "WISHLIST_UPDATE", payload: id })
                    }
                    className={`wishlist-icon-vert ${
                      addedToWishlist ? "wishlisted" : ""
                    }`}
                  />
                </div>
                <div className="text-btn-container">
                  <div className="text-container vertical-text">
                    <small className="quiet">{marker}</small>
                    <small>
                      <br />
                    </small>
                    <p>
                      {name} <br />
                      Rs.{price.original} <br />
                    </p>
                  </div>
                  <div className="btn-container cta-btn">
                    {!addedToCart ? (
                      <button
                        onClick={() =>
                          productsDispatch({ type: "CART_UPDATE", payload: id })
                        }
                        className="btn btn-primary-solid"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate("/cart")}
                        className="btn btn-primary-solid"
                      >
                        Go To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
