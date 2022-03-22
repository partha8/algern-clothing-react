import React from "react";
import { useStateContext } from "../../context/StateProvider";
import { FaHeart } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import "./card.css";

export const Card = (product, removeFromWishlist) => {
  const { _id, name, price, marker, image, addedToWishlist, addedToCart } =
    product;
  let navigate = useNavigate();
  let location = useLocation();

  const addToWishlist = () => {};
  const addToCart = () => {};

  return (
    <div key={_id} className="card card-vertical">
      <div className="image-container-vert">
        <img
          className="img responsive-image product-image"
          src={image.src}
          alt={image.alt}
        />

        {location.pathname === "/wishlist" ? (
          <BsFillTrashFill
            onClick={() => removeFromWishlist(product)}
            className="trash"
          />
        ) : (
          <FaHeart
            onClick={() => addToWishlist(product)}
            className={`wishlist-icon-vert ${
              addedToWishlist ? "wishlisted" : ""
            }`}
          />
        )}
      </div>
      <div className="text-btn-container">
        <div className="text-container vertical-text">
          <small className="quiet">{marker}</small>
          <small>
            <br />
          </small>
          <p>
            {name} <br />
            Rs.{price} <br />
          </p>
        </div>
        <div className="btn-container cta-btn">
          {!addedToCart ? (
            <button
              onClick={() =>
                addToCart(product)
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
