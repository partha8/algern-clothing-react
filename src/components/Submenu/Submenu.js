import React from "react";
import "./submenu.css";

import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
import { useStateContext } from "../../context/StateProvider";

import { Link } from "react-router-dom";

export const Submenu = () => {
  const { showMenu, setShowMenu, cart, wishlist, categories, filterDispatch } =
    useStateContext();
  return (
    <div className={`${showMenu ? "submenu-wrapper show" : "submenu-wrapper"}`}>
      <section className="submenu">
        <AiOutlineClose className="close" onClick={() => setShowMenu(false)} />
        <ul className="submenu-links">
          {categories.map((item, _id) => {
            const { categoryName } = item;
            return (
              <li key={_id}>
                <Link
                  className="submenu-link"
                  to="/product-listing"
                  onClick={() => {
                    filterDispatch({
                      type: "SORT_BY_CATEGORY",
                      payload: categoryName,
                    });
                    setShowMenu(false);
                  }}
                >
                  {categoryName}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="submenu-items">
          <Link onClick={() => setShowMenu(false)} to="/login">
            <FaUserAlt />
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="container-badge icon-container"
            to="/cart"
          >
            <FaShoppingBag />
            <span
              className={` ${cart.length ? "badge icon-badge" : "hide-badge"}`}
            >
              {cart.reduce((sum, curr) => sum + parseInt(curr.quantity, 10), 0)}
            </span>
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="container-badge icon-container"
            to="/wishlist"
          >
            <FaHeart />
            <span
              className={` ${
                wishlist.length ? "badge icon-badge" : "hide-badge"
              }`}
            >
              {wishlist.length}
            </span>
          </Link>
          <FaSearch onClick={() => setShowMenu(false)} />
        </div>
      </section>
    </div>
  );
};
