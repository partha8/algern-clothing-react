import React, { useMemo } from "react";
import { Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import { updateCart, updateWishlist } from "../../utils/productUtils";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, productsDispatch } = useStateContext();
  const debouncedUpdateCart = useMemo(
    () =>
      debounce(
        (_id, productsDispatch, actionType) =>
          updateCart(_id, productsDispatch, actionType),
        500
      ),
    []
  );

  const debouncedUpdateWishlist = useMemo(
    () =>
      debounce(
        (_id, productsDispatch) => updateWishlist(_id, productsDispatch),
        500
      ),
    []
  );

  return (
    <>
      <Navbar />

      {!cart.length && (
        <div className="png-holder">
          <img src="/cart.png" alt="cart empty" className="png-placeholder" />
          <h2>Start adding items to the cart now!</h2>
        </div>
      )}

      {cart.length && (
        <div className="cart">
          <header className="cart-header">
            <h3>Items in Your Cart</h3>
            <Link
              onClick={() => {
                productsDispatch({
                  type: "SET_ORDER",
                  payload: {
                    items: [...cart],
                  },
                });
              }}
              to="/buy/address"
            >
              <span className="btn">Proceed to Buy</span>
            </Link>
          </header>

          <div className="cart-table">
            <ul>
              {cart.map((item) => {
                const { name, price, size, color, image, _id } = item.productId;
                return (
                  <li className="product-item">
                    <div className="item-main">
                      <div className="item-block ib-info">
                        <img
                          className=" responsive-image product-img"
                          src={image}
                          alt={name}
                        />
                        <div className="ib-info-meta">
                          <span className="title">{name}</span>
                          <span className="itemno quiet">#{_id}</span>
                          <span className="styles">
                            <span>
                              <strong>Color</strong>: {color}
                            </span>
                            <span>
                              <strong>Size</strong>: {size}
                            </span>
                            <span className="blue-link">Edit Details</span>
                          </span>
                        </div>
                      </div>

                      <div className="item-block ib-qty-total-price">
                        <div className="ib-qty">
                          <span className="qty">{item.quantity}</span>
                          <span className="arrows">
                            <AiOutlineArrowUp
                              onClick={() =>
                                debouncedUpdateCart(
                                  _id,
                                  productsDispatch,
                                  "increment"
                                )
                              }
                            />
                            <AiOutlineArrowDown
                              onClick={() =>
                                debouncedUpdateCart(
                                  _id,
                                  productsDispatch,
                                  "decrement"
                                )
                              }
                            />
                          </span>
                          <span className="price">
                            <span>x</span> Rs.{price}
                          </span>
                        </div>

                        <div className="ib-total-price">
                          <span className="tp-price">
                            Rs.{item.quantity * price}
                          </span>
                          <span className="tp-remove">
                            <BsFillTrashFill
                              onClick={() => updateCart(_id, productsDispatch)}
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="item-foot">
                      <div className="if-left">In Stock</div>
                      <div className="if-right">
                        <span className="blue-link">Gift Options</span> |{" "}
                        <span
                          onClick={() => {
                            debouncedUpdateWishlist(_id, productsDispatch);
                            debouncedUpdateCart(_id, productsDispatch);
                          }}
                          className="blue-link"
                        >
                          Add to Wishlist
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sub-table">
            <div className="summary-block">
              <div className="sb-promo">
                <input type="text" placeholder="Enter Promo Code" />
                <span className="btn">Apply</span>
              </div>
              <ul>
                <li className="subtotal">
                  <span className="sb-label">Subtotal</span>
                  <span className="sb-value">
                    Rs.
                    {cart.reduce((sum, curr) => {
                      return sum + curr.quantity * curr.productId.price;
                    }, 0)}{" "}
                  </span>
                </li>

                <li className="shipping">
                  <span className="sb-label">Shipping</span>
                  <span className="sb-value">n/a</span>
                </li>

                <li className="tax">
                  <span className="sb-label">Est. Tax</span>
                  <span className="sb-value">Rs. 0.00</span>
                </li>

                <li className="grand-total">
                  <span className="sb-label">Total</span>
                  <span className="sb-value">
                    Rs.
                    {cart.reduce((sum, curr) => {
                      return sum + curr.quantity * curr.productId.price;
                    }, 0)}{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="cart-footer">
            <span className="cont-shopping">
              <i className="bx bx-chevron-left"></i>Continue Shopping
            </span>
            <Link
              onClick={() => {
                productsDispatch({
                  type: "SET_ORDER",
                  payload: {
                    items: [...cart],
                  },
                });
              }}
              to="/buy/address"
            >
              <span className="btn">Proceed to Buy</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
