import React from "react";
import { useStateContext } from "../../context/StateProvider";
import { FaHeart } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import "./card.css";
import {
  removeFromWishlist,
  addToWishlist,
  addToCart,
  updateWishlist,
  updateCart,
} from "../../utils/productUtils";
import { useAuthContext } from "../../context/AuthProvider";

export const Card = (product) => {
  const { _id, name, price, marker, image } = product;

  let navigate = useNavigate();
  let location = useLocation();

  const { cart, wishlist, productsDispatch, toastHandler } = useStateContext();

  const { userState } = useAuthContext();

  const addedToWishlist = wishlist.findIndex((item) => item._id === _id);

  const addedToCart = cart.findIndex((item) => item.productId._id === _id);

  return (
    <div key={_id} className="card card-vertical">
      <div className="image-container-vert">
        <img
          className="img responsive-image product-image"
          src={image}
          alt={name}
        />

        {location.pathname === "/wishlist" ? (
          <BsFillTrashFill
            onClick={() => updateWishlist(_id, productsDispatch, toastHandler)}
            className="trash"
          />
        ) : (
          <FaHeart
            onClick={() => {
              userState._id
                ? updateWishlist(_id, productsDispatch, toastHandler)
                : toastHandler(true, "You need to login", "error");
            }}
            className={`wishlist-icon-vert ${
              addedToWishlist === -1 ? "" : "wishlisted"
            }
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
          {addedToCart === -1 ? (
            <button
              onClick={() => {
                userState._id
                  ? updateCart(_id, productsDispatch, toastHandler)
                  : toastHandler(true, "You need to login", "error");
              }}
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
