import React from "react";
import "./navbar.css";
import { FaUserAlt, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { useStateContext } from "../../context/StateProvider";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";

export const Navbar = ({ checkHome }) => {
  const {
    setShowMenu,
    cart,
    wishlist,
    categories,
    filterDispatch,
    productsList,
    productsDispatch,
  } = useStateContext();

  const { userState } = useAuthContext();
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
          {userState._id ? (
            <Link to="/profile">
              <FaUserAlt />
            </Link>
          ) : (
            <Link to="/login">
              <FaUserAlt />
            </Link>
          )}

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
      </div>
      <ul className="links-container">
        {categories.map((item) => {
          const { categoryName } = item;
          return (
            <li className="link-item">
              <Link
                className="link"
                to="/product-listing"
                onClick={() =>
                  filterDispatch({
                    type: "SORT_BY_CATEGORY",
                    payload: categoryName,
                  })
                }
              >
                {categoryName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
