import React from "react";
import "./submenu.css";

import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
import { useStateContext } from "../../context/StateProvider";

import { Link } from "react-router-dom";

export const Submenu = () => {
  const { showMenu, setShowMenu, cart, wishlist } = useStateContext();
  return (
    <div className={`${showMenu ? "submenu-wrapper show" : "submenu-wrapper"}`}>
      <section className="submenu">
        <AiOutlineClose className="close" onClick={() => setShowMenu(false)} />
        <ul className="submenu-links">
          <li>
            <Link
              onClick={() => setShowMenu(false)}
              className="submenu-link"
              to="/product-listing"
            >
              women
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShowMenu(false)}
              className="submenu-link"
              to="/product-listing"
            >
              men
            </Link>
          </li>
        </ul>

        <div className="submenu-items">
          <Link to="/login">
            <FaUserAlt />
          </Link>
          <Link className="container-badge icon-container" to="/cart">
            <FaShoppingBag />
            <span
              className={` ${cart.length ? "badge icon-badge" : "hide-badge"}`}
            >
              {cart.reduce((sum, curr) => sum + parseInt(curr.qty, 10), 0)}
            </span>
          </Link>
          <Link className="container-badge icon-container" to="/wishlist">
            <FaHeart />
            <span
              className={` ${
                wishlist.length ? "badge icon-badge" : "hide-badge"
              }`}
            >
              {wishlist.length}
            </span>
          </Link>
          <FaSearch />
        </div>
      </section>
    </div>
  );
};
