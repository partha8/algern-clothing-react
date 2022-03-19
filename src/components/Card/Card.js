import React from "react";
import { useStateContext } from "../../context/StateProvider";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export const Card = ({
  id,
  name,
  price,
  marker,
  image,
  addedToWishlist,
  addedToCart,
}) => {
  let navigate = useNavigate();
  let location = useLocation();
//   console.log(location, "from card component");

  const { productsDispatch } = useStateContext();
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
};
