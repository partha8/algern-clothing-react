import React from "react";
import "./navbar.css";
import { FaUserAlt, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { useStateContext } from "../../context/StateProvider";
import { Link } from "react-router-dom";

export const Navbar = ({ checkHome }) => {
  const { setShowMenu, cart, wishlist } = useStateContext();

  return (
    <nav className={`${checkHome === "/" ? "navbar" : "navbar staticNav"}`}>
      <div className="nav">
        <GiHamburgerMenu
          onClick={() => setShowMenu(true)}
          className="hamburger"
        />
        <div className="information">
          <a href="...">
            <button className="btn btn-link">Customer Service</button>
          </a>
          <a href="...">
            <button className="btn btn-link">Find a store</button>
          </a>
        </div>

        <div className="brand-logo">
          <Link className="cursor-initial" to="/">
            <h2 className="logo">Algern Clothing</h2>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/login">
            <FaUserAlt />
          </Link>
          <Link className="container-badge icon-container" to="/cart">
            <FaShoppingBag />
            <span
              className={` ${cart.length ? "badge icon-badge" : "hide-badge"}`}
            >
              {cart.reduce((sum, curr) => sum + parseInt(curr.quantity, 10), 0)}
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
      </div>
      <ul className="links-container">
        <li className="link-item">
          <Link className="link" to="/product-listing">
            Women
          </Link>
        </li>
        <lib className="link-item">
          <Link className="link" to="/product-listing">
            Men
          </Link>
        </lib>
      </ul>
    </nav>
  );
};
