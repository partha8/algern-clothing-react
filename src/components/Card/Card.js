import React, { useMemo } from "react";
import { useStateContext } from "../../context/StateProvider";
import { FaHeart } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import "./card.css";
import { updateWishlist, updateCart } from "../../utils/productUtils";
import { useAuthContext } from "../../context/AuthProvider";

import { toast } from "react-toastify";

import { debounce } from "lodash";

export const Card = (product) => {
  const { _id, name, price, marker, image } = product;

  let navigate = useNavigate();
  let location = useLocation();

  const { cart, wishlist, productsDispatch } = useStateContext();

  const { userState } = useAuthContext();

  const addedToWishlist = wishlist.findIndex((item) => item._id === _id);

  const addedToCart = cart.findIndex((item) => item.productId._id === _id);

  const debouncedUpdateWishlist = useMemo(
    () =>
      debounce(
        (_id, productsDispatch) => updateWishlist(_id, productsDispatch),
        500
      ),
    []
  );

  const debouncedUpdateCart = useMemo(
    () =>
      debounce(
        (_id, productsDispatch) => updateCart(_id, productsDispatch),
        500
      ),
    []
  );

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
            onClick={() => debouncedUpdateWishlist(_id, productsDispatch)}
            className="trash"
          />
        ) : (
          <FaHeart
            onClick={() => {
              userState._id
                ? debouncedUpdateWishlist(_id, productsDispatch)
                : toast.info("You need to login first");
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
                  ? debouncedUpdateCart(_id, productsDispatch)
                  : toast.info("You need to login first");
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
